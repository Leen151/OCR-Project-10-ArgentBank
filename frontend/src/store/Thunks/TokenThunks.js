import { getTokenSuccess, getTokenError } from '../Actions/TokenAction';
import {loadUser} from "./UserThunks";
const baseURL = "http://localhost:3001/api/v1/user/";

// Thunks
export const loadToken = (email, password, navigate) => async (dispatch) => {
  dispatch(getTokenSuccess({ isGetting: true }));

  try {
    const response = await fetch(`${baseURL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const token = data.body.token;

    localStorage.setItem("token", token);

    dispatch(getTokenSuccess({ token, tokenTrue: true, isGetting: false }));

    await dispatch(loadUser(token));
    navigate("/profil");
  } catch (error) {
    dispatch(
      getTokenError({
        error: error.message,
        isGetting: false,
        tokenTrue: false,
      })
    );
  }
};
