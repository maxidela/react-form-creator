import React, { useEffect } from "react";
import FormList from "./FormsList";
import { useSelector, useDispatch } from "react-redux";
import { loadForms } from "../../state/actions/formActions";
import { form } from "../../state/actions/actionTypes";

const FormsPage = () => {
  const forms = useSelector((state: { forms: form[] }) => state.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadForms());
  }, []);

  return (
    <>
      <h2>List of Forms</h2>
      <FormList forms={forms} />
    </>
  );
};

export default FormsPage;
