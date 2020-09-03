import React from "react";
import { form } from "../../state/actions/actionTypes";

interface Props {
  forms: form[];
}

const FormList: React.FC<Props> = ({ forms }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Fields</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {forms.map((form) => {
          return (
            <tr key={form.id}>
              <td>{form.name}</td>
              <td>{form.fields.length}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">
                  Preview
                </button>{" "}
                <button className="btn btn-outline-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FormList;
