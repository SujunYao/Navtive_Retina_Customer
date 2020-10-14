// TypeScript infers that this function is returning SendMessageAction
// export function login(param: Message): ChatActionTypes {
//   return {
//     type: SEND_MESSAGE,
//     payload: newMessage
//   }
// }

// // TypeScript infers that this function is returning DeleteMessageAction
// export function logout(timestamp: number): ChatActionTypes {
//   return {
//     type: DELETE_MESSAGE,
//     meta: {
//       timestamp
//     }
//   }
// }
import {CHECK_MOBILE_PARAMS} from './types';

export const checkMobile = (params: CHECK_MOBILE_PARAMS) => {

};