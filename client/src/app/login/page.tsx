"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "@/utils/validation/auth";

// import axios from "axios";
// import { authenticate, isAuth } from "../helpers/auth";
// import { Link, Redirect } from "react-router-dom";

interface InitialValues {
  email: string;
  password: string;
}

const Login = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   textChange: "Sign In",
  // });

  // const { email, password, textChange } = formData;

  // const handleChange = (text: "email" | "password") => (e) => {
  //   setFormData({ ...formData, [text]: e.target.value });
  // };

  const initialValues: InitialValues = { email: "", password: "" };

  /**If not admin redirect to /private
   * if admin redirect to /admin
   */
  // const informParent = (response) => {
  //   authenticate(response, () => {
  //     isAuth() && isAuth().role === "admin"
  //       ? history.push("/admin")
  //       : history.push("/private");
  //     toast.success(`Hey ${response.data.user.name}, Welcome`);
  //   });
  // };

  const handleSubmit = (values: InitialValues) => {
    // console.log(process.env.REACT_APP_API_URL);
    console.log("form submitted");

    // setFormData({ ...formData, textChange: "Submitting" });
    // axios
    //   .post(`${process.env.REACT_APP_API_URL}/login`, {
    //     email,
    //     password: password,
    //   })
    //   .then((res) => {
    //     authenticate(res, () => {
    //       setFormData({
    //         ...formData,
    //         email: "",
    //         password: "",
    //         textChange: "Submitted",
    //       });
    //       isAuth() && isAuth().role === "admin"
    //         ? history.push("/admin")
    //         : history.push("/private");
    //       toast.success(`Hey ${res.data.user.name}, Welcome back!`);
    //     });
    //   })
    //   .catch((err) => {
    //     setFormData({
    //       ...formData,
    //       email: "",
    //       password: "",
    //       textChange: "Sign In",
    //     });
    //     console.log(err.response);
    //     toast.error(err.response.data.errors);
    //   });
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      {/* {isAuth() ? <Redirect to="/" /> : null} */}
      <ToastContainer />
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
            <div className="w-full flex-1 mt-8"></div>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              onSubmit={(values) => handleSubmit(values)}
            >
              <Form>
                <div className="mx-auto max-w-xs relative ">
                  <Field
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    render={(msg) => (
                      <span className="text-red-600 text-sm font-bold">
                        {msg}
                      </span>
                    )}
                  />
                  <Field
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    render={(msg) => (
                      <span className="text-red-600 text-sm font-bold">
                        {msg}
                      </span>
                    )}
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <FontAwesomeIcon icon={faSignIn} size="xs" />
                    <span className="ml-3">Sign In</span>
                  </button>
                  <Link
                    href="/users/password/forget"
                    className="no-underline hover:underline text-indigo-500 text-md text-right absolute right-0  mt-2"
                  >
                    Forgot password?
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>

          <div className="my-12 border-b text-center">
            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign up with e-mail
            </div>
          </div>

          <div className="w-full flex-1 mt-8 text-indigo-500">
            <div className="flex flex-col items-center">
              <a
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                href="/register"
                target="_self"
              >
                <FontAwesomeIcon icon={faUser} size="xs" />
                <span className="ml-4">Sign Up</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-authSvg bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
