import { createAction } from "@reduxjs/toolkit";

// Actions
export const getTokenSuccess = createAction("GET_TOKEN_SUCCESS", (token) => ({
  payload: token,
}));
export const getTokenError = createAction("GET_TOKEN_ERROR", (error) => ({
  payload: error,
}));
