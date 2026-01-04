import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/Header.js";
import BodyComponent from "./src/components/Body.js";
import Resturants from "./src/components/Resturants.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./src/components/Error.js";
import About from "./src/components/About.js";
import Contact from "./src/components/Contact.js";
/*
Header
    Logo
    NavBar
Body
    search
    cardcontainer
        cards
Footer
    Copyright
    Links
    Adddress
    Contact

 */

const AppContainer = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"resturants/:resid",
        element:<Resturants/>
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
