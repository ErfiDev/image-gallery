import React, { useState, useEffect, useContext, useRef } from "react";
import { CTX } from "../context";
import { GetSpecificFile, EditReq, Req } from "../proto/app_pb";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GetBase64 from "../utils/base64";

const EditElm = () => {
  const [data, setData] = useState();
  const [base64, setBase64] = useState();
  const [size, setSize] = useState();
  const app = useContext(CTX);
  const { id } = useParams();
  const navigate = useNavigate();
  const refInput = useRef(null);

  useEffect(() => {
    let req = new GetSpecificFile();
    req.setId(id);
    app.api.getOne(req, {}, (err, res) => {
      if (err) {
        toast.error("error on receiving data from server!", {
          position: "bottom-left",
          closeOnClick: true,
        });
        return;
      }
      if (res.array.length <= 0) {
        setData("can't find!");
      } else {
        setData(res.array[2]);
      }
    });
  }, []);

  function Edit() {
    let req = new EditReq();
    req.setId(id);
    let reqType = new Req();
    reqType.setName(data);
    reqType.setAddr(base64);
    req.setFields(reqType);

    if (base64) {
      app.api.edit(req, {}, (err, res) => {
        if (err) {
          toast.error("error on updating data!", {
            position: "bottom-left",
            closeOnClick: true,
          });
          return;
        }

        if (res.array[0] === 200) {
          toast.success("file updated!", {
            position: "bottom-left",
            closeOnClick: true,
          });
          navigate("/");
          return;
        } else {
          toast.info(res.array[1], {
            position: "bottom-left",
            closeOnClick: true,
          });
        }
      });
      return;
    } else {
      toast.info("please enter file", {
        position: "bottom-left",
        closeOnClick: true,
      });
    }
  }

  return (
    <div className="fixed flex flex-col justify-center align-center w-full h-full bg-clip-padding inset-x-0 top-0 left-0 backdrop-filter backdrop-blur-xl bg-opacity-80 z-50">
      <button
        onClick={() => navigate("/")}
        className="absolute top-2 left-2 text-black text-lg border-none outline-none bg-none"
      >
        Back
      </button>
      <div className="flex justify-center w-full">
        <input
          ref={refInput}
          onChange={(e) =>
            GetBase64(e, (d) => {
              setBase64(d);

              if (!d) {
                refInput.current.value = "";
              }
            })
          }
          className="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    w-3/4
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="formFileSm"
          type="file"
        />
      </div>
      <p className="text-center pt-5 text-lg md:text-xl">
        <span className="text-gray-900 text-lg md:text-2xl">User Name:</span>
        &nbsp;{data ? data : "loading..."}
      </p>
      <div className="flex justify-center mt-5">
        <button
          onClick={Edit}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditElm;
