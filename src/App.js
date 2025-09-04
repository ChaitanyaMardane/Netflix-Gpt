// import logo from './logo.svg';
import { Provider, useDispatch } from "react-redux";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  // useNavigate,
} from "react-router-dom";
import Browse from "./Components/Browse";
import Login from "./Components/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      children: [
 
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/browse",
      element: <Browse />,
    }
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
