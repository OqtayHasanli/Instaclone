import React from "react"
import Home from "../pages/Home/Home"
import AuthPage from "../pages/auth/AuthPage"
import Layout from "../Layout/Layout"




export const routes=[
    {
    element:<Layout/>,
    children: [
        {
            path: "home",
            element: <Home />,
          },
      ],
},


{
    path: "/",
    element:<AuthPage/>
},

] 