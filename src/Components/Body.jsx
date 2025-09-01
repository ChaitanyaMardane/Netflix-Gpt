import React from 'react'
import Login from "./Login"
import Header from './Header'
import Browse from './Browse'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ])
  return (
    <div>
    <RouterProvider router={appRouter}>
        
    </RouterProvider>
    </div>
  )
}

export default Body
