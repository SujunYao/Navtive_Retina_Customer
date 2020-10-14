import { STOREAGE_KEYS, NO_LOGIN_VALS, REDIRECT_VALS } from '../store/enum';

const OPE_ID_REGEX = new RegExp("[?&]openid(=([^&#]*)|&|#|$)");
const NO_NEED_LOG_REGEX = new RegExp("[?&]no_login(=([^&#]*)|&|#|$)");
const TOKEN_REGEX = new RegExp("[?&]token(=([^&#]*)|&|#|$)");
const REDIRECT = new RegExp("[?&]redirect(=([^&#]*)|&|#|$)");

const getToken = (): string | null => {
  const results = TOKEN_REGEX.exec(location.href);
  if (!results) return null;
  if (!results[2]) return null;
  let _bStr = decodeURIComponent(results[2].replace(/\+/g, '')); // base 64 code;
  if (Math.ceil(_bStr.length / 4) > 0) {
    _bStr.padEnd(Math.ceil(_bStr.length / 4), '=');
  }
  return atob(_bStr);
}

/** Get the open id from URL;
   * @Sujun **/
const getOpenID = (URL: string): any => {
  const results = OPE_ID_REGEX.exec(URL);
  if (!results) return null;
  if (!results[2]) return null;
  return decodeURIComponent(results[2].replace(/\+/g, ''));
};


const getDirect = (URL: string): any => {
  const results = REDIRECT.exec(URL);
  if (!results) return false;
  if (!results[2]) return false;
  return decodeURIComponent(results[2].replace(/\+/g, ''));
}

/** Get the value for judge whether need login for the APP
 * @Sujun **/
const getNoNeedLogin = (URL: string): boolean => {
  const results = NO_NEED_LOG_REGEX.exec(URL);
  if (!results) return false;
  if (!results[2]) return false;
  const urlVal = decodeURIComponent(results[2].replace(/\+/g, ''));
  return urlVal === NO_LOGIN_VALS.TRUE;
}

interface TOKEN_PARAMS {
  openID: string,
  noNeedLogin: boolean,
  redirect: boolean,
  rRouteName?: string,
  rRouteParams?: object,
}

export default (): TOKEN_PARAMS => {
  const res = {
    openID: '',
    noNeedLogin: false,
    redirect: false,
  }
  const tokenVal = getToken();
  if (tokenVal) {
    res.openID = getOpenID(tokenVal);
    res.redirect = getDirect(tokenVal);
    res.noNeedLogin = getNoNeedLogin(tokenVal);
  }
  return res;
};