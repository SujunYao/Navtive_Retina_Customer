export interface SystemState {
  loggedIn: boolean
  openID: string
  routeName: string
  routeParams: object
  readonly: boolean
  lockRoute: boolean
  keepToken: string | undefined
  pid: string
}

export interface ROUTE {
  routeName: string,
  routeParams: { [key: string]: any }
}

export interface TOKEN_PARAMS {
  openID: string,
  noNeedLogin: boolean,
  lockRoute: boolean,
  rRouteName?: string,
  keepToken?: string,
  rRouteParams?: { [key: string]: any },
}

export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction