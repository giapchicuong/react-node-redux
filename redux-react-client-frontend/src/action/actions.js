import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  CREATE_NEW_USER_REQUEST,
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
} from "./types";
import { getAllUser, createNewUser, deleteUser } from "../services/userService";

// GET ALL USER
export const fetchAllUser = () => {
  return async (dispatch, getState) => {
    dispatch(fetchUserRequest());
    try {
      const res = await getAllUser();
      const data = res ? res : [];
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserError());
    }
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (payload) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: payload,
  };
};

export const fetchUserError = () => {
  return {
    type: FETCH_USER_ERROR,
  };
};

// CREATE NEW USER
export const createNewUserRedux = (user) => {
  return async (dispatch, getState) => {
    dispatch(createNewUserRequest());
    try {
      const res = await createNewUser(user);
      if (res && res.errCode === 0) {
        dispatch(createNewUserSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      dispatch(createNewUserError());
    }
  };
};

export const createNewUserRequest = () => {
  return {
    type: CREATE_NEW_USER_REQUEST,
  };
};

export const createNewUserSuccess = () => {
  return {
    type: CREATE_NEW_USER_SUCCESS,
  };
};

export const createNewUserError = () => {
  return {
    type: CREATE_NEW_USER_ERROR,
  };
};
// DELETE USER

export const deleteUserRedux = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUserRequest());
    try {
      const res = await deleteUser(id);
      if (res && res.errCode === 0) {
        dispatch(deleteUserSuccess());
        dispatch(fetchAllUser());
      }
    } catch (error) {
      dispatch(deleteUserError);
    }
  };
};

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = () => {
  return {
    type: DELETE_USER_ERROR,
  };
};
