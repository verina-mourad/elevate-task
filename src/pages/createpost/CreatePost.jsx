import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { z } from "zod";


  export default function CreatePost() {

const postSchema = z.object({
  title: z.string().trim().min(3),
  body: z.string().trim().min(3),
  author: z.string().min(3),
});

    const [post, setpost] = useState(null); 
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: zodResolver(postSchema)
    });

async function HandlePosts(data) {
  console.log("FORM DATA 👉", data);

  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );

    console.log("RESPONSE 👉", response.data);
    setpost(response.data);
  } catch (error) {
    console.error(error);
  }
}


  return (<>
        <div className='mx-auto w-3/4'>

      {/* Overlay */}
      <div className="absolute inset-0 p-2 bg-blue-900/60 "></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl ">
        {/* Header */}
        <NavLink to={'/'} className="mb-6 rounded-full bg-white/30 px-6 py-3 text-white flex justify-between items-center">
          <span className="font-semibold">Elevate</span>
          <span className="font-semibold">
            Frontend Advanced Bootcamp Task
          </span>
        </NavLink>

        {/* Card */}
        <div className="bg-white m-4 rounded-2xl shadow-lg p-8">
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-6">
            ✏️ Create a New Post
          </h2>

          <form onSubmit={handleSubmit(HandlePosts)} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block mb-2 text-sm font-medium">Title</label>
              <input
                {...register("title")}
                type="text"
                placeholder="Enter post title"
                className="w-full rounded-lg bg-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>

            {/* Body */}
            <div>
              <label className="block mb-2 text-sm font-medium">Body</label>
              <textarea
                {...register("body")}
                rows="4"
                placeholder="Enter post body"
                className="w-full rounded-lg bg-gray-200 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
                  {errors.body && <p className="text-red-500">{errors.body.message}</p>}

            </div>

            {/* Author */}
            <div {...register("author")}>
              <label className="block mb-2 text-sm font-medium">Author</label>
              <select className="w-full rounded-lg bg-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select Author</option>
                <option>Leanne Graham</option>
                <option>Ervin Howell</option>
              </select>
            </div>
            {errors.author && <p className="text-red-500">{errors.author.message}</p>}
            {/* Button */}
            <button
              type="submit"
              className="cursor-pointer mx-auto block rounded-lg bg-gray-800 px-10 py-3 text-white hover:bg-black transition"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
        </div>
    </>
    );
}


