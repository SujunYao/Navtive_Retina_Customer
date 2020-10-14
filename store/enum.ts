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
  NO_LOGIN = 'Tk9fTE9HSU4',
  REDIRECT = 'cmVkaXJlY3Q',
  RROUTE = 'cmVkaXJlY3Qgcm91dGU', // redirect route name
  RROUTEPARAMS = 'cmVkaXJlY3Qgcm91dGUgcGFyYW1z', // redirect route params
}

export enum NO_LOGIN_VALS {
  TRUE = '1',
  FALSE = '0'
}

export enum REDIRECT_VALS {
  TRUE = '1',
  FALSE = '0'
}