import {
  SET_INPUT,
  CANCEL_POST,
  TOGGLE_CREATE_POST_LOADING,
  EDIT_POST_INSERT_DATA,
  RESET_CREATE_POST_FORM_DATA,
} from "../actions/types";

const initialState = {
  isLoading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CREATE_POST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case CANCEL_POST:
      return {
        ...initialState,
      };
    case EDIT_POST_INSERT_DATA:
      return {
        ...state,
        ...payload,
      };
    case RESET_CREATE_POST_FORM_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
