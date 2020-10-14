import {
  UserState, UserActionTypes, WECHAT_BIND, CHECK_MOBILE, GET_PID, SEND_VERIFY_CODE, UPDATE_SESSION
} from './types'


import { GENDER, SMOKE } from '../enum';

const initialState: UserState = {
  pid: '',
  bg_empty: null,
  bg_full: null,
  bg_low: null,
  birthday: null,
  bp_high: null,
  bp_low: null,
  gender: GENDER.OTHER,
  height: null,
  icon: '',
  is_smoke: SMOKE.DEF,
  location: '',
  mobile: '',
  name: '',
  smoke_years: null,
  weight: null
}

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case WECHAT_BIND: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}