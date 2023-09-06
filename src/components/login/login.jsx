import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import logodark from "./logodark.png";
// import axios from "axios";
import axios from "../../utils/axios";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import Forgetpassword from "./forgetpassword/forgetpassword";
const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("/admin/login", {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        window.location.href = "/";
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center mt-10 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            تسجيل الدخول{" "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={onSubmitHandler}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ادخل الايميل :{" "}
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ادخل كلمة المرور :
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-red-400 hover:text-indigo-500"
                  >
                    هل نسيت كلمة المرور ؟{" "}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {loading ? (
              <button
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm "
                type="button"
                disabled
              >
                <CircularProgress />

                {/* جاري التحميل */}
              </button>
            ) : (
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  ادخال{" "}
                </button>
              </div>
            )}
          </form>
          {error && (
            <span className="flex w-full justify-center rounded-md px-3 py-1.5  text-red-600 text-base">
              خطأ في الايميل & كلمة المرور
            </span>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            ليس لديك حساب؟
            <a
              href="#"
              className="font-semibold leading-6 text-red-600 hover:text-red-500"
            >
              انشاء حساب جديد{" "}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

// <h1 className="text-xl md:text-2xl font-bold  ">عقاراتي</h1>
// <input type="email" name="email" placeholder="الايميل" required />
// <input
//   type="password"
//   name="password"
//   placeholder="كلمة المرور"
//   required
// />
// {loading ? (
//   <button class="btn btn-primary sub" type="button" disabled>
//     <span
//       class="spinner-border spinner-border-sm "
//       role="status"
//       aria-hidden="true"
//     ></span>
//     {/* جاري التحميل */}
//   </button>
// ) : (
//   <button type="submit">تسجيل الدخول </button>
// )}
// {error && <span>خطأ في الايميل & كلمة المرور</span>}
// <a
//   href="http://localhost/Real-estate/public/password/reset"
//   variant="success"
//   className="title"
// >
//   هل نسيت كلمة المرور ؟
// </a>
// {/* <Forgetpassword /> */}
