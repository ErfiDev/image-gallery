import React from "react";

const EditElm = () => {
  return (
    <div className="fixed top-10 flex flex-col justify-center align-center inset-x-0 w-full h-5/6 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
      <div className="flex justify-center">
        <input
          className="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="formFileSm"
          type="file"
        />
      </div>
      <p className="text-center pt-5">
        <span className="text-gray-400">User Name:</span>
        &nbsp;erfan
      </p>
      <div className="flex justify-center mt-5">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditElm;
