import React, { useState, useEffect } from "react";
import Post from "./post";
import { FileUploaderClient } from "../proto/app_grpc_web_pb";
import { GetReq } from "../proto/app_pb";

const Posts = () => {
  let [posts, setPosts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(10);

  const client = new FileUploaderClient("http://localhost:8080");

  useEffect(() => {
    let req = new GetReq();
    client.get(req, {}, (err, res) => {
      console.log(err);
      console.log(res);
    });
  }, [currentPage]);

  return (
    <section className="w-full">
      <div className="min-h-forMain h-auto flex flex-wrap justify-center align-start space-x-2 pt-5 gap-4">
        {posts.map((item) => (
          <Post name={item[2]} addr={item[0]} id={item[1]} />
        ))}
      </div>
      <div className="w-full mt-5 flex justify-around align-center p-4">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Last
        </button>
        <button
          onClick={() => setCurrentPage(currentPage++)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Posts;
