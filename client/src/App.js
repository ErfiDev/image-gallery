import React, { Fragment } from "react";
import Input from "./components/input";
import Posts from "./components/posts";

import "./styles/style.css";

const App = () => {
  return (
    <Fragment>
      <Input />
      <Posts />
    </Fragment>
  );
};

export default App;
