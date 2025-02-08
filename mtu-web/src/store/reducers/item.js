import { FETCH_ITEM, FETCH_ITEMS, SET_IS_LOADING, SET_ERROR } from "../actionTypes/global";

const initialState = {
  item: null,
  items: [],
  isLoading: false,
  itemId: {},
};

export default function itemReducer(state = initialState, action) {
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
    case FETCH_ITEM:
      return {
        ...state,
        itemId: action.payload,
      };
      case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
