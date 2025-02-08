import axios from "axios";
import { FETCH_ITEMS, FETCH_ITEM } from "../actionTypes/global";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://2536-182-253-85-229.ngrok-free.app";


export const fetchItems = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "/inventory");
    dispatch({ type: FETCH_ITEMS, payload: data.data });
    return data.data;
  };
};

export const fetchItemById = (id) => {
  return async (dispatch) => {
    // console.log(id)
    const data = await axios.get(BASE_URL + "/inventory/" + id);
    // console.log(data)
    dispatch({ type: FETCH_ITEM, payload: data.data });
  };
};

export const editItemAction = (payload, id) => {
  //   console.log(payload, id);
  return (dispatch) => {
    return axios.put(`${BASE_URL}/inventory/${id}`, payload);
  };
};

export const addItemAction = (payload) => {
  return (dispatch) => {
    // console.log('sebelum axios', payload)
    return axios.post(`${BASE_URL}/inventory`, payload);
  };
};
