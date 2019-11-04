import { userConstants } from "../assets/constants/store-constants";

const initialState = {
	
}
// let user = ""
//const initialState = user ? { loggedIn: true, user } : {};

export function user(state = initialState, action) {
  console.log("auth reducer called with action >> ", action);
  // switch (action.type) {
    // case userConstants.LOGIN_REQUEST:
      // return {
        // loggedIn: true,
        // user: action.user
      // };
    // case userConstants.LOGIN_SUCCESS:
      // return {
        // loggedIn: true,
        // user: action.user
      // };
    // case userConstants.LOGIN_FAILURE:
      // return {};
    // case userConstants.LOGOUT:
      // return {};
    // default:
      // return state;
  // }
}
