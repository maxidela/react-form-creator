import {
  LOAD_FORMS_REQUESTED,
  LOAD_FORMS_ERROR,
  DELETE_FORM_REQUESTED,
  deleteFormAction,
} from "../state/actions/actionTypes";
import {
  loadFormsSuccess,
  deleteFormSuccess,
} from "../state/actions/formActions";
import { takeEvery, put, call } from "redux-saga/effects";
import { getForms, deleteForm } from "../utils/formsApi";

export default function* watcherSaga() {
  yield takeEvery(LOAD_FORMS_REQUESTED, loadFormWorkerSaga);
  yield takeEvery(DELETE_FORM_REQUESTED, deleteFormWorkerSaga);
}

function* loadFormWorkerSaga() {
  try {
    const { data } = yield call(getForms);
    yield put(loadFormsSuccess(data));
  } catch (e) {
    yield put({ type: LOAD_FORMS_ERROR, payload: e });
  }
}

function* deleteFormWorkerSaga(action: deleteFormAction) {
  try {
    yield call(deleteForm, action.form.id);
    yield put(deleteFormSuccess(action.form));
  } catch (e) {
    yield put({ type: LOAD_FORMS_ERROR, payload: e });
  }
}
