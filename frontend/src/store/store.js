import { configureStore } from '@reduxjs/toolkit'
import { getUserReducer } from './Reducers/UserReducer';
import { tokenReducer } from './Reducers/TokenReducer';


export default configureStore({
  reducer: {
    token: tokenReducer,
    user: getUserReducer,
  }
})