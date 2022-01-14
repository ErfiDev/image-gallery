import React from "react";
import { Add } from "@material-ui/icons";

const Input = () => {
  return (
    <section className="w-full min-h-forHeader h-auto flex flex-col jusitfy-center align-center pt-5 pl-auto pr-auto pb-5 shadow-sm md:flex-row md:justify-center md:align-center">
      <div className="flex justify-center align-center space-x-2">
        <button className="rounded h-10 bg-purple-700 cursor-pointer hover:bg-purple-500 pr-3 pl-3 transition-all text-white md:pt-0 md:pb-0">
          <Add fontSize="medium" color="inherit" />
        </button>
        <input
          type="text"
          placeholder="Your name"
          className="w-60 h-10 rounded-full text-gray-800 focus:border-purple-700 border-solid border-2 border-gray-700 p-1 pl-5 pr-5"
        />
      </div>
      <div className="flex justify-center for-add-impor">
        <div className="w-96">
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
      </div>
    </section>
  );
};

export default Input;
