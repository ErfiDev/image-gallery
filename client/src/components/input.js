import React from "react";
import { Add } from "@material-ui/icons";

const Input = () => {
  return (
    <section className="w-full min-h-forHeader h-auto p-5 flex justify-center align-center space-x-5">
      <button className="rounded bg-purple-700 cursor-pointer hover:bg-purple-500 pr-5 pl-5 transition-all text-white">
        <Add fontSize="medium" color="inherit" />
      </button>
      <input
        type="text"
        placeholder="Your name"
        className="w-70 rounded-full text-gray-800 focus:border-purple-700 border-solid border-2 border-gray-700 p-1 pl-5 pr-5"
      />
      <input type="file" />
    </section>
  );
};

export default Input;
