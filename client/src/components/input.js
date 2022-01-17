import React, { useState, useRef, useContext } from "react";
import { Add } from "@material-ui/icons";
import GetBase64 from "../utils/base64";
import { toast } from "react-toastify";
import { Req, GetReq } from "../proto/app_pb";
import { CTX } from "../context";

const Input = () => {
  const [name, setName] = useState();
  const refInput = useRef(null);
  const [base64, setBase64] = useState();
  const app = useContext(CTX);

  function submit() {
    if (name && base64) {
      let req = new Req();
      req.setName(name);
      req.setAddr(base64);

      app.api.upload(req, {}, (err, res) => {
        if (err) {
          toast.error("error on the server, try again!", {
            position: "bottom-left",
            closeOnClick: true,
          });
          return;
        }

        if (res.array[0] === 201) {
          toast.success("post successful added!", {
            position: "bottom-left",
            closeOnClick: true,
          });
          setName("");
          setBase64("");
          refInput.current.value = "";

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
          toast.info(res[1], {
            position: "bottom-left",
            closeOnClick: true,
          });
        }
      });
      return;
    } else {
      toast.info("please enter required fields!", {
        position: "bottom-left",
        closeOnClick: true,
      });
    }
  }

  return (
    <section className="w-full min-h-forHeader h-auto flex flex-col jusitfy-center align-center pt-5 pl-auto pr-auto pb-5 shadow-sm md:flex-row md:justify-center md:align-center">
      <div className="flex justify-center align-center space-x-2">
        <button
          onClick={submit}
          className="rounded h-10 bg-purple-700 cursor-pointer hover:bg-purple-500 pr-3 pl-3 transition-all text-white md:pt-0 md:pb-0"
        >
          <Add fontSize="medium" color="inherit" />
        </button>
        <input
          type="text"
          placeholder="Your name"
          className="w-60 h-10 rounded-full text-gray-800 focus:border-purple-700 border-solid border-2 border-gray-700 p-1 pl-5 pr-5"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className="flex justify-center for-add-impor">
        <div className="w-96">
          <input
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
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="formFileSm"
            type="file"
            ref={refInput}
            onChange={(e) =>
              GetBase64(e, (d) => {
                setBase64(d);

                if (!d) {
                  refInput.current.value = "";
                }
              })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Input;
