import { createAction } from '@reduxjs/toolkit';

// Actions
export const getUserSuccess = createAction('GET_USER_SUCCESS', (user) => ({ payload: user }));
export const getUserError = createAction('GET_USER_ERROR', (error) => ({ payload: error }));
export const logout = createAction('LOGOUT_USER');
export const editUser = createAction('EDIT_USER');
export const editUserSuccess = createAction('EDIT_USER_SUCCESS', (user) => ({ payload: user }));
export const editUserError = createAction('EDIT_USER_ERROR', (error) => ({ payload: error }));
