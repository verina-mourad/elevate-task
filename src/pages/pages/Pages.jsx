import { useState } from "react";
import bgImage from "../../assets/a5157907c99809298ae7939a8960fd8e13c50b76.jpg"; // غيّر المسار حسب مشروعك
import { NavLink, useParams } from "react-router-dom";

export default function Pages() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then((json) => setPost(json));
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-[70vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/60 w-3/4 mx-auto flex flex-col justify-between">

        {/* Content */}
        <div className="relative top-1/2 z-10 max-w-5xl py-12 mx-auto">
          <NavLink to={'/'}>
            <button className="mb-8 rounded-full bg-white/90 px-4 py-2 text-sm text-gray-800 hover:bg-white">
            ← Back to Posts
          </button>
          </NavLink>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            {post?.title}
          </h1>

          <div className="flex gap-6 text-sm text-white/80">
            <span>👤 Leanne Graham</span>
            <span>📅 Sun, August 24th, 2025</span>
          </div>
        </div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-white/90 px-6 py-10  w-3/4 mx-auto -mt-10 mb-20 p-14 rounded-lg shadow-lg">
        <div className="max-w-5xl text-gray-800 leading-relaxed">
          <p>
           {post?.body}
          </p>
        </div>
      </div>
    </>
  );
}
