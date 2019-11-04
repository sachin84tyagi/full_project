import { userConstants } from "../assets/constants/store-constants";
import { authService } from "../services/authService";
import { alertActions } from "./alertActions";
import { history } from "../helpers/history";

export const userAuthActions = {
  addUser,
  deleteUser
};

function addUser(userData) {
  return dispatch => {
    console.log("addUser IS CALLED..............");
    // authService.login(username, password).then(
      // user => {
        // if (user) {
          // dispatch(request({ username }));
          // history.push("/backend/dashboard")
        // } else {
          // dispatch(alertActions.error("Invalid Login Details."));
        // }
      // },
      // error => {
        // dispatch(alertActions.error("Failed"));
      // }
    // );
  };

  // function request(user) {
    // return { type: userConstants.LOGIN_REQUEST, user };
  // }
  // function success(user) {
    // return { type: userConstants.LOGIN_SUCCESS, user };
  // }
  // function failure(error) {
    // return { type: userConstants.LOGIN_FAILURE, error };
  // }
}

function deleteUser(userId) {
	 console.log("deleteUser IS CALLED..............");
  //authService.logout();
  //return { type: userConstants.LOGOUT };
}
