import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./UserForm.module.css";
import { useId } from "react";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Min 3 chars!!!")
    .required("Is required!!!"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Is required!!!"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("Is required!!!"),
  comment: Yup.string().max(256, "Max 256 chars!!!").required("Is required!!!"),
});

export default function UserForm({ onAdd }) {
  const usernameId = useId();

  const handleSubmit = (values, actions) => {
    // console.log("handleSubmit", values);
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "user",
        comment: "Default comment value",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={usernameId}>Username:</label>
          <Field name="username" id={usernameId} />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.group}>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.group}>
          <label>Role:</label>
          <Field as="select" name="role">
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Field>
          <ErrorMessage className={css.error} name="role" component="span" />
        </div>

        <div className={css.group}>
          <label>Comment:</label>
          <Field as="textarea" name="comment" />
          <ErrorMessage className={css.error} name="comment" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
