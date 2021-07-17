import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SingIn = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: ""
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div>
      <form className="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name" className="">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className=""
            placeholder="Nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="">
            Email:
          </label>
          <input
            id="email"
            type="email"
            className=""
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <input type="submit" className="" value="Create account" />
        </div>
      </form>
    </div>
  );
};

export default SingIn;
