import React from "react"
import Home from "../pages/Home/Home"
import AuthPage from "../pages/auth/AuthPage"




export const routes=[
//     {
//     element:<Layout/>,
//     children: [
//         {
//           path: "home",
//           element: <Home />,
//         },
//         {
//             path: "shop",
//             element: <Shop/>,
//         },
//         {
//             path: "about",
//             element: <Aboutpage/>,
//         },
//         {
//             path: "/:id",
//             element: <Detail/>,
//         },
//         {
//             path: "basket",
//             element: <BasketPage />,
//         },
//         {
//             path: "gallery",
//             element: <Gallery />,
//         },
//         {
//             path: "favorite",
//             element: <Favorite />,
//         },
//       ],
// },

{
    path: "/home",
    element:<Home/>
},
{
    path: "/",
    element:<AuthPage/>
},

] 