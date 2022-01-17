import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CTX } from "../context";
import { DeleteReq, GetReq } from "../proto/app_pb";
import { toast } from "react-toastify";

const Post = ({ name, addr, id }) => {
  const navigate = useNavigate();
  const app = useContext(CTX);

  function deletePost() {
    if (id) {
      let req = new DeleteReq();
      req.setId(id + "");
      app.api.delete(req, {}, (err, res) => {
        if (err) {
          toast.error("error on the server!", {
            position: "bottom-left",
            closeOnClick: true,
          });
          return;
        }

        if (res.array[0] === 200) {
          toast.success("delete successful!", {
            position: "bottom-left",
            closeOnClick: true,
          });

          let getReq = new GetReq();
          app.api.get(getReq, {}, (err, res) => {
            if (err) {
              toast.error("error on receiving data from server!", {
                position: "bottom-left",
                closeOnClick: true,
              });
              return;
            }
            app.edit(res.array[0].reverse(), "SET_POSTS");
          });

          return;
        } else {
          toast.error(res.array[1], {
            position: "bottom-left",
            closeOnClick: true,
          });
        }
      });
    } else {
      toast.error("error on the server!", {
        position: "bottom-left",
        closeOnClick: true,
      });
    }
  }

  return (
    <div className="post w-4/5 sm:w-2/5 lg:w-5/12 xl:3/12 min-h-forPost h-auto shadow-lg rounded">
      <div className="w-full h-3/4 overflow-hidden">
        <img src={addr} alt="photo" className="w-full object-cover h-full" />
      </div>
      <p className="text-center pt-5">
        <span className="text-gray-400">User Name:</span>
        &nbsp;{name}
      </p>
      <div className="w-full flex justify-around align-center p-5">
        <button
          onClick={deletePost}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(`/${id}`, { replace: true })}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Post;
