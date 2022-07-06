import * as types from './actionTypes';
import { take, takeEvery, put, all, fork, call } from 'redux-saga/effects';

import {
  loadUsersSuccess,
  loadUsersError,
  getUserSuccess,
  getUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
  loginUserSuccess,
  loginUserError,
} from './actions';
import {
  loadUsersApi,
  getUserApi,
  deleteUserApi,
  updateUserApi,
  loginUserApi,
} from './api';

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    yield put(loadUsersSuccess(response.data));
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}

function* onGetUserStartAsync({ payload: id }) {
  try {
    const response = yield call(getUserApi, id);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserError(error.response.data));
  }
}

function* onDeleteUserStartAsync(id) {
  try {
    const response = yield call(deleteUserApi, id);
    if (response.status === 204) {
      yield put(deleteUserSuccess(id));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

function* onUpdateUserStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserApi, id, formValue);
    if (response.updatedAt) {
      yield put(updateUserSuccess());
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

function storeToken(token) {
  try {
    localStorage.setItem('token', token);
  } catch (error) {
    console.log('Error:', error);
  }
}

function* onLoginUserStartAsync({ payload }) {
  try {
    const response = yield call(loginUserApi, payload);
    if (response.token) {
      yield call(storeToken, response.token);
      yield put(loginUserSuccess(response.token));
    }
  } catch (error) {
    yield put(loginUserError(error.response.data));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onGetUser() {
  yield takeEvery(types.GET_USER_START, onGetUserStartAsync);
}

function* onDeleteUser() {
  const { payload: id } = yield take(types.DELETE_USER_START);
  yield call(onDeleteUserStartAsync, id);
}

function* onUpdateUser() {
  yield takeEvery(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

function* onLoginUser() {
  yield takeEvery(types.LOGIN_USER_START, onLoginUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onGetUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
  fork(onLoginUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
