import React, { Fragment } from "react";
import Input from "./components/input";
import Posts from "./components/posts";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import EditElm from "./components/editElm";
import { FileUploaderClient } from "./proto/app_grpc_web_pb";
import { CTX } from "./context";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";

const App = () => {
  const client = new FileUploaderClient("http://localhost:8080");

  return (
    <Fragment>
      <CTX.Provider
        value={{
          api: client,
        }}
      >
        <Input />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:id" element={<EditElm />} />
        </Routes>
        <ToastContainer />
      </CTX.Provider>
    </Fragment>
  );
};

export default App;
