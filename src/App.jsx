import React from 'react'
import Home from './pages/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layoout from './pages/Layout/Layout'
import Pages from './pages/pages/Pages'
import CreatePost from './pages/createpost/CreatePost'
import UserContextProvider from './component/useContext/UserContext'

export default function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Layoout/>,children:[
      {index:true,element:<Home/>},
      {path:'/pages/:id',element:<Pages/>},
      {path:'/createpost',element:<CreatePost/>},
    ]}
  ])
  return <>
  <UserContextProvider>
      <RouterProvider router={router} />
   </UserContextProvider>
  </>
}
