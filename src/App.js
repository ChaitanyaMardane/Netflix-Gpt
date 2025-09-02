// import logo from './logo.svg';
import { Provider, useDispatch } from 'react-redux';
import Header from './Components/Header';
import appStore from './utils/appStore';
import Footer from './Components/Footer';
import { createBrowserRouter , Outlet ,RouterProvider, useNavigate } from 'react-router-dom';
import Browse from './Components/Browse';
import Login from './Components/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./utils/firebase";
import { useEffect } from 'react';
import { addUser, removeUser } from './utils/userSlice';
function App() {
        const dispatch = useDispatch();


  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User is signed in:", user);
        const { uid,email,displayName } = user; 
        dispatch(addUser({uid:uid , email:email, displayName:displayName}));
        // You can store user data in the store or perform any other actions here
        // Example: appStore.dispatch(setUserData({ uid, email, displayName }));
      } else {
        // console.log("User is signed out.");
        dispatch(removeUser());
      }
    });
  

  }, []);

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
          path: "/browse",
          element: <Browse />
        },
        {
          path: "/login",
          element: <Login />
        }

      ]

    }
  ]);


  return (
    <div className="app bg-black">
      
        <RouterProvider router={router} />
    
     
    </div>
  );
}

export default App;
