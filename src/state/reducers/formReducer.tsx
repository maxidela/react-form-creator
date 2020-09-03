import initialState from "./initialState";
import {
  formActionTypes,
  LOAD_FORMS_SUCCESS,
  form,
  DELETE_FORM_SUCCESS,
} from "../actions/actionTypes";

const formReducer = (
  state: form[] = initialState.forms,
  action: formActionTypes
) => {
  switch (action.type) {
    case LOAD_FORMS_SUCCESS:
      return action.forms;
    case DELETE_FORM_SUCCESS:
      return state.filter((form) => form.id !== action.form.id);
    default:
      return state;
  }
};

export default formReducer;
