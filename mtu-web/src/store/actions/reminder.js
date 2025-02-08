import axios from "axios";
import { FETCH_REMINDER } from "../actionTypes/global";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://2536-182-253-85-229.ngrok-free.app";

export const fetchReminder = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "/reminder");
    dispatch({ type: FETCH_REMINDER, payload: data.data });
    return data.data;
  };
};

export const editReminderAction = (payload, id) => {
  //   console.log(payload, id);
  return (dispatch) => {
    return axios.put(`${BASE_URL}/reminder/${id}`, payload);
  };
};