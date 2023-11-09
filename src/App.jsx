import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Formik
        initialValues={{
          name: "",
          email: "",
          agree: false,
          favoriteColor: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name can't be blank")
            .max(20, "Must be 20 characters or less"),
          email: Yup.string().email().required("Email can't be blank"),
          agree: Yup.boolean().oneOf([true], "You must accept the terms"),
          favoriteColor: Yup.string()
            .required("Favorite color can't be blank")
            .oneOf(["red", "blue", "yellow"]),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setTimeout(() => {
            resetForm()
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
          dirty,
          isSubmitting,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-col  p-10 rounded">
              <h1 className="text-3xl mx-auto mb-4 text-white">Register</h1>
              <label htmlFor="name">Name Surname</label>
              <input
                value={values.name}
                onChange={handleChange}
                className="p-1"
                type="text"
                id="name"
              />
              {errors.name && touched.name && (
                <div className="text-red-500">{errors.name}</div>
              )}
              <label className="mt-2" id="email">
                E-mail
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                className="p-1"
                type="text"
                id="email"
              />
              {errors.email && touched.email && ( <div className="text-red-500">{errors.email}</div>)}

              <label className="mt-2 mb-1 " htmlFor="favoriteColor">
                Favorite Color
              </label>
              <select
                value={values.favoriteColor}
                onChange={handleChange}
                className="p-1"
                name=""
                id="favoriteColor"
              >

                <option value="" disabled="disabled">
                  Pick Color
                </option>
                <option  value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
              </select>
              {errors.favoriteColor && touched.favoriteColor && ( <div className="text-red-500">{errors.favoriteColor}</div>)}

              <div className="my-3">
                <input
                  value={values.agree}
                  onChange={handleChange}
                  type="checkbox"
                  id="agree"
                />
                <label className="mx-3" htmlFor="agree">
                  I have read and accept the terms and conditions
                </label>
              {errors.agree && touched.agree && ( <div className="text-red-500">{errors.agree}</div>)}

              </div>

              <button
                type="submit"
                disabled={!dirty || isSubmitting}
                className="p-2  text-white bg-green-700"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
