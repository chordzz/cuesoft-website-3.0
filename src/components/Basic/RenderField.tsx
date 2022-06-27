import { Form } from "semantic-ui-react";

const RenderField = (field: any) => (
  <div className="form">
    <Form.Input {...field.input} {...field} />
    {field.meta.touched && field.meta.error && (
      <span className="error">{field.meta.error}</span>
    )}
  </div>
);

export default RenderField;
