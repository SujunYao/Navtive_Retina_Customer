import { StackCardInterpolatedStyle } from '@react-navigation/stack';
import { GENDER, SMOKE, REGISTER_STATE, PWD_STATE } from '../enum';

/**
 * Interfaces 
 * @Sujun
 * **/
export interface UserState {
  pid: string
  bg_empty: number | null
  bg_full: number | null
  bg_low: number | null
  birthday: Date | null
  bp_high: number | null
  bp_low: number | null
  gender: GENDER
  height: number | null
  icon: string
  is_smoke: SMOKE
  location: string
  mobile: string
  name: string
  smoke_years: number | null
  weight: number | null
}

export interface WECHAT_BIND_PARAMS {
  openid: string
  mobile: string
  password?: string
}

export interface CHECK_MOBILE_PARAMS {
  moblie: StringConstructor
}

export interface CHECK_MOBILE_RES {
  patient_status: REGISTER_STATE,
  pwd_status: PWD_STATE,
  openid: string
}

export interface GET_PID_PARAMS {
  openid: string
}

export interface PID_RES {
  pid: string
}

export interface SEND_VERIFY_CODE_PARAMS {
  mobile: string
}

interface VERIFY_CODE_LIFE_CYS {
  triggerTime: Date
} 

export interface WECHAT_UNBIND_PARAMS {
  openid: string
}

export interface VERIFY_CODE_PARAMS {
  code: string
  mobile: string
}

export interface SET_PWD_PARAMS {
  password: string
  openid: string
}

export interface UPDATE_HEALTH_RECORD_PARAMS {
  pid: string
  name: string
  gender: GENDER
  birthday: string
  height?: number | null
  bg_empty?: number | null
  bg_full?: number | null
  bg_low?: number | null
  bp_high?: number | null
  bp_low?: number | null
  is_smoke?: SMOKE
  smoke_years?: number | null
  weight?: number | null
}

export interface GET_HEALTH_RECORD_PARAMS {
  pid: string
}

export interface GET_HEALTH_RECORD_RES {
  bg_empty: number | null
  bg_full: number | null
  bg_low: number | null
  birthday: Date
  bp_high: number | null
  bp_low: number | null
  gender: GENDER
  height: number | null
  icon: string
  is_smoke: SMOKE
  location: string
  mobile: string
  name: string
  smoke_years: number | null
  weight: number | null
}

/**
 * Action Names
 * **/
export const WECHAT_BIND = 'WECHAT_BIND'
export const CHECK_MOBILE = 'CHECK_MOBILE'
export const GET_PID = 'GET_PID'
export const SEND_VERIFY_CODE = 'SEND_VERIFY_CODE'
export const UPDATE_SESSION = 'WECHAT_BIND'

/**
 * Action interface Types
 * @Sujun
 * **/
interface WechatBindAction {
  type: typeof WECHAT_BIND
  payload: PID_RES
}

interface CheckMobileAction {
  type: typeof CHECK_MOBILE
  payload: CHECK_MOBILE_RES
} 

interface GetPIDAction{
  type:typeof GET_PID
  payload: PID_RES
}

interface SendVerifyCodeAction{
  type: typeof SEND_VERIFY_CODE
  payload: VERIFY_CODE_LIFE_CYS
}



export type UserActionTypes = WechatBindAction | CheckMobileAction | GetPIDAction | SendVerifyCodeAction