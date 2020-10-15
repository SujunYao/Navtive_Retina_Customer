import { TOKEN_PARAMS } from './types';
import { STOREAGE_KEYS, NO_LOGIN_VALS, REDIRECT_VALS } from '../enum';

export default {
  getSessionStore: (): TOKEN_PARAMS => {
    const openID = sessionStorage.getItem(STOREAGE_KEYS.OPENID) || '';
    const noNeedLogin = openID !== '' && sessionStorage.getItem(STOREAGE_KEYS.NO_NEED_LOGIN) === NO_LOGIN_VALS.TRUE;
    const rRouteName = sessionStorage.getItem(STOREAGE_KEYS.R_ROUTE) || '';
    const lockRoute = rRouteName !== '' && sessionStorage.getItem(STOREAGE_KEYS.LOCK_ROUTE) === REDIRECT_VALS.FALSE;
    const rRouteParams = JSON.parse(sessionStorage.getItem(STOREAGE_KEYS.R_ROUTE_PARAMS) || '{}');
    const keepToken = sessionStorage.getItem(STOREAGE_KEYS.KEEP_TOKEN) || '';
    return {
      openID,
      noNeedLogin,
      lockRoute,
      rRouteName,
      rRouteParams,
      keepToken
    };
  },

  setSessionStore: (data: TOKEN_PARAMS) => {
    sessionStorage.setItem(STOREAGE_KEYS.OPENID, data.openID || '');
    sessionStorage.setItem(STOREAGE_KEYS.NO_NEED_LOGIN, (data.noNeedLogin && NO_LOGIN_VALS.TRUE) || NO_LOGIN_VALS.FALSE);
    sessionStorage.setItem(STOREAGE_KEYS.LOCK_ROUTE, (data.lockRoute && REDIRECT_VALS.FALSE) || REDIRECT_VALS.TRUE);
    sessionStorage.setItem(STOREAGE_KEYS.R_ROUTE, data.rRouteName || '');
    sessionStorage.setItem(STOREAGE_KEYS.R_ROUTE_PARAMS, JSON.stringify(data.rRouteParams || {}));
    sessionStorage.setItem(STOREAGE_KEYS.KEEP_TOKEN, data.keepToken || '');
  }
};