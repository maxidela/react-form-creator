import React, { useEffect } from "react";
import FormList from "./FormsList";
import Spinner from "../../shared/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { loadForms, deleteForm } from "../../state/actions/formActions";
import { form } from "../../state/actions/actionTypes";

const FormsPage = () => {
  const forms = useSelector((state: { forms: form[] }) => state.forms);
  const dispatch = useDispatch();

  const onDelete = (form: form) => {
    dispatch(deleteForm(form));
  };

  useEffect(() => {
    dispatch(loadForms());
  }, []);

  return (
    <>
      <h2>List of Forms</h2>
      {!forms.length ? (
        <Spinner />
      ) : (
        <FormList forms={forms} onDelete={onDelete} />
      )}
    </>
  );
};

export default FormsPage;
