import React, { Fragment } from "react";
import Input from "./components/input";
import Posts from "./components/posts";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import EditElm from "./components/editElm";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => {
  return (
    <Fragment>
      <Input />
      <Routes>
        <Route path="/" element={<Posts />}>
          <Route path=":id" element={<EditElm />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Fragment>
  );
};

export default App;
