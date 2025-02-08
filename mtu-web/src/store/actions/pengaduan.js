import axios from "axios";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://2536-182-253-85-229.ngrok-free.app";

export const addPengaduan = (payload) => {
    return (dispatch) => {
      return axios.post(`${BASE_URL}/pengaduan`, payload);
  };
  };