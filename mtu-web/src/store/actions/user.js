import axios from "axios";
import { FETCH_USER_DETAIL, USER_LOGOUT, USER_LOGIN } from "../actionTypes/global";

const baseUrl = "http://localhost:3000";
// const baseUrl = "https://2536-182-253-85-229.ngrok-free.app";

export const fetchUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const user = await axios({
        method: "GET",
        url: `${baseUrl}/users/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(fetchUserDetailAction(user));
    } catch (error) {
      console.error(error);
    }
  };
};

export function fetchUserDetailAction(payload) {
  return {
    type: FETCH_USER_DETAIL,
    payload,
  };
}

export const doRegister = (payload) => {
  return () => {
    return axios.post(`${baseUrl}/register`, payload);
  };
};

export const doLogin = (payload) => {
  return () => {
    return axios.post(`${baseUrl}/login`, payload);
  };
};

export function userLogin() {
  return {
    type: USER_LOGIN,
  };
}

export const userLogout = () => {
    return {
      type: USER_LOGOUT,
    };
  };