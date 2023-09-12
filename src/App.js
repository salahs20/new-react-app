import React from "react";
import Layout from "./Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./componant/Home/Home";
import About from "./componant/About/About";
import Protfolio from "./componant/Protfolio/Protfolio";
import Contact from "./componant/Contact/Contact";
import Notfound from "./componant/Notfound/Notfound";
export default function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "protfolio", element: <Protfolio /> },
        { path: "contact", element: <Contact/> },
        { path: "*", element: <Notfound/>},
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
