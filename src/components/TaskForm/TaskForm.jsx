import { Formik, Form, Field } from "formik";
import css from "./TaskForm.module.css";

export default function TaskForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          className={css.field}
          name="text"
          placeholder="Enter task text..."
        />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
}
