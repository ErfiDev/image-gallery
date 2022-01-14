import React, { Fragment } from "react";
import Input from "./components/input";
import Posts from "./components/posts";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => {
  return (
    <Fragment>
      <Input />
      <Posts />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
