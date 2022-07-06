import * as types from './actionTypes';

export const loadUsersStart = () => ({
  type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

export const getUserStart = (info) => ({
  type: types.GET_USER_START,
  payload: info,
});

export const getUserSuccess = (info) => ({
  type: types.GET_USER_SUCCESS,
  payload: info,
});

export const getUserError = (error) => ({
  type: types.GET_USER_ERROR,
  payload: error,
});

export const deleteUserStart = (id) => ({
  type: types.DELETE_USER_START,
  payload: id,
});

export const deleteUserSuccess = (id) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: id,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

export const updateUserStart = (info) => ({
  type: types.UPDATE_USER_START,
  payload: info,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

export const loginUserStart = (credentials) => ({
  type: types.LOGIN_USER_START,
  payload: credentials,
});

export const loginUserSuccess = (token) => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: token,
});

export const loginUserError = (error) => ({
  type: types.LOGIN_USER_ERROR,
  payload: error,
});
