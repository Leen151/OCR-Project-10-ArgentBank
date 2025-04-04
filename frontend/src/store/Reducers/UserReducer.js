import { createReducer } from '@reduxjs/toolkit'
import { 
    getUserSuccess, 
    getUserError, 
    logout, 
    editUser, 
    editUserSuccess, 
    editUserError 
} from '../Actions/UserAction.js'

//état initial du reducer
const initialStateUser = {
  isLoading: false, //indique si une opéartion est en cour
  isLoggedIn: false, //indique si l'utilisateur est connecté
  user: {}, // contient les infos de l'utilisateur
  error: '', //stock les erreurs
}

//décrit toutes les action possible concernant l'user
//et comment les etats du user doit changer en réponse à l'action
export const getUserReducer = createReducer(initialStateUser, (builder) => {
  builder
    .addCase(getUserSuccess, (state, action) => {
      return { ...state, ...action.payload }
    })
    .addCase(getUserError, (state, action) => {
      return { ...state, ...action.payload }
    })
    .addCase(logout, () => {
      return initialStateUser
    })
    .addCase(editUser, (state) => {
      state.isLoading = true
    })
    .addCase(editUserSuccess, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.error = ''
    })
    .addCase(editUserError, (state, action) => {
      state.isLoading = false
      state.user = {}
      state.error = action.payload
    })
})