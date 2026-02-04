import React from 'react'

export default function Navbar() {
  return <>
   
    {/* ===== Header Box ===== */}
      <div className="bg-gray-400 w-[1200px] h-[100px] rounded-xl relative mx-auto mb-10">
        <h3 className="text-white text-xl font-semibold absolute top-1/2 left-9 -translate-x-1/2  -translate-y-1/2">
          Elevate
        </h3>

        <h2 className="text-white text-3xl font-semibold absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 text-center">
          Frontend Advanced Bootcamp Task
        </h2>
      </div>
  </>
}
