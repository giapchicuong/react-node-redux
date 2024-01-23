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
} from "../action/types";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: true,
  isError: false,
  isCreating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // FETCH USER
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USER_SUCCESS:
      return {
        ...state,
        listUsers: action.payload,
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      // CREATE NEW USER
    case CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        isCreating: true,
      };
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
      };
    case CREATE_NEW_USER_ERROR:
      return {
        ...state,
        isCreating: false,
      };
      // DELETE USER
      case DELETE_USER_REQUEST:
        return {
          ...state,
        };
  
      case DELETE_USER_SUCCESS:
        return {
          ...state,
        };
      case DELETE_USER_ERROR:
        return {
          ...state,
        };
    default:
      return state;
  }
};

export default userReducer;
