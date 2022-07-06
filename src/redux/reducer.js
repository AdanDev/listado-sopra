import * as types from './actionTypes';

const initialState = {
  users: [],
  user: [],
  token: '',
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.GET_USER_START:
    case types.DELETE_USER_START:
    case types.UPDATE_USER_START:
    case types.LOGIN_USER_START:
      return {
        ...state,
      };
    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case types.LOAD_USERS_ERROR:
    case types.DELETE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
