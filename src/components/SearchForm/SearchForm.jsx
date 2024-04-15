import { Field, Form, Formik } from "formik";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
