import initialState from "./initialState";
import {
  formActionTypes,
  LOAD_FORMS_SUCCESS,
  form,
} from "../actions/actionTypes";

const formReducer = (
  state: form[] = initialState.forms,
  action: formActionTypes
) => {
  switch (action.type) {
    case LOAD_FORMS_SUCCESS:
      return action.forms;
    default:
      return state;
  }
};

export default formReducer;
