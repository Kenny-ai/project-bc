"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignIn } from "@fortawesome/free-solid-svg-icons";

function App() {
  // if (sessionStorage.reloadAfterPageLoad) {
  //   toast.error("Signout Successfull");
  //   sessionStorage.reloadAfterPageLoad = false;
  // }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <ToastContainer />
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-2xl font-extrabold  text-center ">
              Welcome to SADG University{" "}
            </h1>
            <h2>Blockchain Certificate Authentication System</h2>
            <div className="w-full flex-1 mt-8 text-indigo-500">
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Sign up or Sign In
                </div>
              </div>
              <div className="mx-auto max-w-xs relative ">
                <Link
                  href="/login"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <FontAwesomeIcon icon={faSignIn} size="xs" />
                  <span className="ml-3">Sign In</span>
                </Link>
                <Link
                  href="/register"
                  className="mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <FontAwesomeIcon icon={faUserPlus} size="xs" />
                  <span className="ml-3">Sign Up</span>
                </Link>
                {/* <Link
                  to='/private'
                  className='mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Profile Dashbaord</span>
                </Link>
                <Link
                  to='/admin'
                  className='mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Admin Dashbaord</span>
                </Link> */}
                {/* <button
                  onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      history.push('/');
                    });
                  }}
                  className='mt-5 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-out-alt  w-6  -ml-2' />
                  <span className='ml-3'>Signout</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center lg:flex">
          <div className="m-12 xl:m-16 w-full bg-logo bg-contain bg-center bg-no-repeat"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
