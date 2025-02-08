import {
  SET_IS_LOADING,
  SET_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  FETCH_USER_DETAIL,
} from "../actionTypes/global";

const initialState = {
  isLoading: false,
  user: null,
  isLogin: false,
  error: {
    isError: false,
    type: "error",
    message: "",
  },
  userById: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USER_DETAIL:
      return {
        ...state,
        userById: action.payload,
      };
    case USER_LOGIN:
      return { ...state, isLogin: true };
    case USER_LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
}
