import React, { useState, useEffect } from "react";
import Post from "./post";
import { FileUploaderClient } from "../proto/app_grpc_web_pb";
import { GetReq } from "../proto/app_pb";

const Posts = () => {
  let posts = useState([]);
  let currentPage = useState(1);
  let postsPerPage = useState(10);

  const client = new FileUploaderClient("https://localhost:8000");

  useEffect(() => {
    let req = new GetReq();
    let stream = client.get(req, {});
    stream.on("data", (res) => {
      console.log(res);
    });
  }, [currentPage]);

  return (
    <section className="w-full">
      <div className="min-h-forMain h-auto flex flex-wrap justify-center align-start space-x-2 pt-5 gap-4">
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
      </div>
      <div className="w-full mt-5 flex justify-around align-center p-4">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Last
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Next
        </button>
      </div>
    </section>
  );
};

export default Posts;
