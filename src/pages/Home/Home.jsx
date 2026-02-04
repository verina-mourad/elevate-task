import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../component/useContext/UserContext'

export default function Home() {
  const { Posts } = useContext(UserContext)
  const [filteredPosts, setFilteredPosts] = useState([])

  // تحديث filteredPosts لما Posts توصل
  useEffect(() => {
    if (Posts) {
      setFilteredPosts(Posts)
    }
  }, [Posts])

  // البحث
  function handleSearch(value) {
    if (!value) {
      setFilteredPosts(Posts)
    } else {
      const filtered = Posts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredPosts(filtered)
    }
  }

  return (
    <div className="w-[1200px] mx-auto flex flex-col">

      {/* Post List Header */}
      <div className="flex justify-between items-center bg-white rounded-xl p-4">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-list"></i>
          <h2 className="font-semibold">Post list</h2>
        </div>

        <NavLink to="/createpost" className="text-gray-500">+ create a new post</NavLink>
      </div>

      {/* Search + Dropdown */}
      <div className="flex justify-between items-center bg-gray-400 rounded-xl">

        {/* Search */}
        <form className="w-[400px] p-4 rounded-xl ">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full p-3 ps-10 rounded-xl bg-white outline-none"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2">
              🔍
            </span>
          </div>
        </form>

      </div>

      {/* Posts Area */}
      {filteredPosts.slice(0, 12).map((post) => (
        <NavLink key={post.id} to={`/pages/${post.id}`} className="bg-white/70 rounded-xl">
          <div className="p-4 border-b border-gray-400">
            <h3 className="font-semibold">{post.title}</h3>
          </div>
        </NavLink>
      ))}

    </div>
  )
}
