import React, { useState, useEffect, useContext } from "react";
import Post from "./post";
import { GetReq } from "../proto/app_pb";
import { toast } from "react-toastify";
import { CTX } from "../context";

const Posts = () => {
  let [posts, setPosts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage, setPostsPerPage] = useState(10);

  const app = useContext(CTX);

  useEffect(() => {
    let req = new GetReq();
    app.api.get(req, {}, (err, res) => {
      if (err) {
        toast.error("error on receiving data from server!", {
          position: "bottom-left",
          closeOnClick: true,
        });
        return;
      }
      setPosts(res.array[0].reverse());
    });
  }, []);

  let firstPage = (currentPage - 1) * postsPerPage;
  let lastPage = currentPage * postsPerPage;
  let filterPosts = posts.slice(firstPage, lastPage);

  return (
    <section className="w-full">
      <div className="min-h-forMain h-auto flex flex-wrap justify-center align-start space-x-2 pt-5 gap-4">
        {filterPosts.length === 0 ? (
          <h1>Nothing</h1>
        ) : (
          filterPosts.map((item) => (
            <Post name={item[2]} addr={item[0]} id={item[1]} />
          ))
        )}
      </div>
      <div className="w-full mt-5 flex justify-around align-center p-4">
        {currentPage === 1 ? (
          <button
            disabled
            onClick={() => setCurrentPage(currentPage--)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:bg-gray-400 disabled:text-white disabled:border-none"
          >
            Last
          </button>
        ) : (
          <button
            onClick={() => setCurrentPage(currentPage--)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Last
          </button>
        )}
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
