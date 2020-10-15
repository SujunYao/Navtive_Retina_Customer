export enum GENDER {
  MALE = 'M',
  FEMALE = 'F',
  OTHER = 'O',
}

export enum SMOKE {
  DEF = -1,
  NOSMOKE = 0,
  OCCASIONALLY = 1,
  OFTEN = 2
}

export enum REGISTER_STATE {
  REGISTERED = 1,
  NOTEGISTERED = 0
}

export enum PWD_STATE {
  SETED = 1,
  UNSET = 0
}

export enum STOREAGE_KEYS { // base64
  OPENID = 'b3BlbklE',
  NO_NEED_LOGIN = 'Tk9fTE9HSU4',
  LOCK_ROUTE = 'cmVkaXJlY3Q',
  R_ROUTE = 'cmVkaXJlY3Qgcm91dGU', // redirect route name
  R_ROUTE_PARAMS = 'cmVkaXJlY3Qgcm91dGUgcGFyYW1z', // redirect route params
  KEEP_TOKEN = 'a2VlcFRva2Vu'
}

export enum URL_PARAMS {
  OPENID = 'openid',
  NO_NEED_LOGIN = 'no_login',
  LOCK_ROUTE = 'redirect',
  ID = 'id'
}

export enum NO_LOGIN_VALS {
  TRUE = '1',
  FALSE = '0'
}

export enum REDIRECT_VALS {
  TRUE = '1',
  FALSE = '0'
}