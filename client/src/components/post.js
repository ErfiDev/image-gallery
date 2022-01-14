import React from "react";

const Post = ({ name, addr, id }) => {
  return (
    <div className="post w-4/5 sm:w-2/5 lg:w-5/12 xl:3/12 min-h-forPost h-auto shadow-lg rounded">
      <div className="w-full h-3/4 overflow-hidden">
        <img
          src="https://media.istockphoto.com/photos/woman-running-on-mountain-picture-id1312239440?k=20&m=1312239440&s=612x612&w=0&h=aeN_lRIi0Dc28zNIOXU4KB4aasNiiAvo3Nne6AQBk3Y="
          alt="photo"
          className="w-full object-cover h-full"
        />
      </div>
      <p className="text-center pt-5">
        <span className="text-gray-400">User Name:</span>
        &nbsp;{name}
      </p>
      <div className="w-full flex justify-around align-center p-5">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Delete
        </button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Post;
