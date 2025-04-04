import { 
  getUserSuccess, 
  getUserError, 
  editUser, 
  editUserSuccess, 
  editUserError 
} from '../Actions/UserAction';

const baseURL = 'http://localhost:3001/api/v1/user/';

// Thunks
export const loadUser = (token) => async (dispatch) => {
  dispatch(getUserSuccess({ isLoading: true }));

  try {
    const response = await fetch(`${baseURL}profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(getUserSuccess({ user: data, isLoading: false, isLoggedIn: true }));
    return data;
  } catch (error) {
    dispatch(getUserError({ error: error.message, isLoading: false, isLoggedIn: false }));
    throw error;
  }
};

export const EditUser = ({ firstName, lastName }) => async (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(editUser());

  try {
    const response = await fetch(`${baseURL}profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ firstName, lastName }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    dispatch(editUserSuccess(data));
    dispatch(loadUser(token));
  } catch (error) {
    dispatch(editUserError(error.message));
  }
};
