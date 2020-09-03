import {
  LOAD_FORMS_REQUESTED,
  LOAD_FORMS_SUCCESS,
  DELETE_FORM_REQUESTED,
  DELETE_FORM_SUCCESS,
  form,
} from "./actionTypes";

export function loadForms() {
  return { type: LOAD_FORMS_REQUESTED };
}

export function loadFormsSuccess(forms: form[]) {
  return { type: LOAD_FORMS_SUCCESS, forms };
}

export function deleteForm(form: form) {
  return { type: DELETE_FORM_REQUESTED, form };
}

export function deleteFormSuccess(form: form) {
  return { type: DELETE_FORM_SUCCESS, form };
}
