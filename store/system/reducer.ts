import { SystemState, SystemActionTypes, UPDATE_SESSION } from './types'
import { STOREAGE_KEYS, NO_LOGIN_VALS, REDIRECT_VALS } from '../enum';

const opeID = sessionStorage.getItem(STOREAGE_KEYS.OPENID) || '';
const loggedIn = opeID && sessionStorage.getItem(STOREAGE_KEYS.NO_LOGIN) === NO_LOGIN_VALS.TRUE;
const redirectRoute = sessionStorage.getItem(STOREAGE_KEYS.RROUTE) || '';
const redirectRouteParams = JSON.parse(sessionStorage.getItem(STOREAGE_KEYS.RROUTEPARAMS) || '{}');

const initialState: SystemState = {
  loggedIn: loggedIn || false,
  session: '',
  openID: opeID || '',
  routeParams: redirectRouteParams,
  tgtRoutName: redirectRoute || '',
  readonly: (!opeID && redirectRoute && true) || false,
  lockRoute: (redirectRoute && true) || false,
  pid: ''
}

// console.log(333);

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