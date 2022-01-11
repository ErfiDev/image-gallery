import React, { useState } from "react";
import Post from "./post";

const Posts = () => {
  let posts = useState([]);
  let currentPage = useState(1);
  let postsPerPage = useState(10);

  return (
    <section className="w-full min-h-forMain h-auto flex flex-wrap justify-center align-start space-x-2 pt-5 gap-4">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Posts;
