import { getTokenSuccess, getTokenError } from '../Actions/TokenAction';
import { logout } from '../Actions/UserAction';
import {createReducer} from "@reduxjs/toolkit";

//état initial du reducer
const initialStateToken = {
  isGetting: false,
  token: '',
  tokenTrue: false,
  error: '',
};

//Création du reducer et de son comportement en fonction des actions getTokenSucces et getTokenError/ met a jour l'etat
export const tokenReducer = createReducer(initialStateToken, (builder) => {
  builder
    .addCase(getTokenSuccess, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(getTokenError, (state, action) => {
      return { ...state, ...action.payload };
    })
    .addCase(logout, () => {
      return initialStateToken;
    });
});

