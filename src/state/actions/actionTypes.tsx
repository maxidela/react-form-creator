export const LOAD_FORMS_REQUESTED = "LOAD_FORMS_REQUESTED";
export const LOAD_FORMS_SUCCESS = "LOAD_FORMS_SUCCESS";
export const LOAD_FORMS_ERROR = "LOAD_FORMS_ERROR";
export const DELETE_FORM_REQUESTED = "DELETE_FORM_REQUESTED";
export const DELETE_FORM_SUCCESS = "DELETE_FORM_SUCCESS";
export const CREATE_FORM_SUCCESS = "CREATE_FORM_SUCCESS";

export interface field {
  type: string;
  name: string;
  label: string;
}

export interface form {
  id: number;
  name: string;
  fields: field[];
}

export interface loadFormsAction {
  type: typeof LOAD_FORMS_SUCCESS;
  forms: form[];
}

export interface createFormAction {
  type: typeof CREATE_FORM_SUCCESS;
  form: form;
}

export interface deleteFormAction {
  type: typeof DELETE_FORM_REQUESTED;
  form: form;
}

export interface deleteFormSuccess {
  type: typeof DELETE_FORM_SUCCESS;
  form: form;
}

export type formActionTypes =
  | loadFormsAction
  | createFormAction
  | deleteFormAction
  | deleteFormSuccess;
