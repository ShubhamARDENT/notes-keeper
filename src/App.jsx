import { createBrowserRouter } from "react-router-dom";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import "../src/App.css";
import Error from "./components/Error";
import { Outlet, RouterProvider } from "react-router";
import Home from "./components/home";
import StickyNotes from "./components/StickyNotes";

const Applayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/todolistapp", element: <TodoList /> },
      { path: "/stickynotes", element: <StickyNotes /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={Approuter} />;
};

export default App;
