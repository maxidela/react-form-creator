import {
  LOAD_FORMS_REQUESTED,
  LOAD_FORMS_ERROR,
} from "../state/actions/actionTypes";
import { loadFormsSuccess } from "../state/actions/formActions";
import { takeEvery, put, call } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery(LOAD_FORMS_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put(loadFormsSuccess(payload));
  } catch (e) {
    yield put({ type: LOAD_FORMS_ERROR, payload: e });
  }
}

function getData() {
  return fetch("http://127.0.0.1:3001/forms").then((response) =>
    response.json()
  );
}
