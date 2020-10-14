import { Middleware } from 'redux';
import { RootState } from '../store';

const generateAuthorization = (openID: string, pid?: string): string => {
  return btoa(`${pid || 'null'}:${openID}`);
}

// const prepareReq = (req: XMLHttpRequest) => {
//   req.setRequestHeader('Content-Type', 'application/json');
//   req.setRequestHeader('Accept', 'application/json');
//   req.setRequestHeader('Authorization', 'Basic ' + generateAuthorization());
// }

const authroizationMiddleware: Middleware<{}, RootState> = store => next => action => {
  if (action.authroization) {
    const { system: { openID, pid } } = store.getState();
    if (openID) {
      const config = {
        headers: { 'Authorization': generateAuthorization(openID, pid) }
      };
      // return fetch(API_ROOT + endpoint, config)
      //   .then(response =>
      //     response.json()
      //       .then(resource => ({ resource, response }))
      //   ).then(({ resource, response }) => {
      //     if (!response.ok) {
      //       return Promise.reject(resource)
      //     }
      //     return resource
      //   })
    } else {
      throw new Error('No opentID saved in store!!');
    }
  } else {
    return next(action);
  }
};

export default authroizationMiddleware;