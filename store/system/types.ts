export interface SystemState {
  loggedIn: boolean
  session: string
  openID: string
  tgtRoutName: string
  routeParams: object
  readonly: boolean
  lockRoute: boolean
  pid: string
}

export const UPDATE_SESSION = 'UPDATE_SESSION'

interface UpdateSessionAction {
  type: typeof UPDATE_SESSION
  payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction