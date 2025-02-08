import { FETCH_REMINDER, SET_IS_LOADING, SET_ERROR } from "../actionTypes/global";

const initialState = {
  reminder: [],
  isLoading: false,
};

export default function reminderReducer(state = initialState, action) {
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
    case FETCH_REMINDER:
      return {
        ...state,
        reminder: action.payload,
      };
    default:
      return state;
  }
}
