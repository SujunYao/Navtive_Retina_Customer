import token from './token';
import sessionStore from './sessionStorage';
import offlineAccessList from '../../navigation/offlineAccessRoutes';
import { SystemState, SystemActionTypes, UPDATE_SESSION } from './types'

const urlTokenVals = token();
const sessionStoreVals = sessionStore.getSessionStore();

const openID = urlTokenVals.openID || sessionStoreVals.openID || '';
const loggedIn = urlTokenVals.noNeedLogin || sessionStoreVals.noNeedLogin || false;
const routeParams = urlTokenVals.rRouteParams || sessionStoreVals.rRouteParams || {};
const routeName = urlTokenVals.rRouteName || sessionStoreVals.rRouteName || '';
const lockRoute = urlTokenVals.lockRoute || sessionStoreVals.lockRoute || false;
const readonly = openID === '' && offlineAccessList.indexOf(routeName) >= 0;
const keepToken = urlTokenVals.keepToken || sessionStoreVals.keepToken || '';

const initialState: SystemState = {
  loggedIn,
  openID,
  routeParams,
  routeName,
  readonly,
  keepToken,
  lockRoute,
  pid: ''
}

if (urlTokenVals.openID) {
  sessionStore.setSessionStore(urlTokenVals);
}

console.log(initialState);

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}