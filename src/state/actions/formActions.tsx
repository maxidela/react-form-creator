import { LOAD_FORMS_REQUESTED, LOAD_FORMS_SUCCESS, form } from "./actionTypes";

export function loadForms() {
  return { type: LOAD_FORMS_REQUESTED };
}

export function loadFormsSuccess(forms: form[]) {
  return { type: LOAD_FORMS_SUCCESS, forms };
}
