import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });
  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User is signed in:", user);
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // You can store user data in the store or perform any other actions here
        // Example: appStore.dispatch(setUserData({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log("Sign-out successful.");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className=" relative  w-screen">
      <div className="absolute top-0 left-0 w-screen z-30  z-0  opacity-100 ">
        <div className=" py-8 flex justify-between  px-40 ">
          <div className="logo  ">
            <img className="h-16 w-48 object-cover" src={LOGO} alt="Logo" />
          </div>
          <div className="lang_sign k  flex">
            <div className="opacity-50">
              <select className=" border border-gray-300 bg-black text-white p-1.5 rounded-md px-4 ">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>

            <button
              onClick={() =>
                user === null ? navigate("/login") : handleSignOut()
              }
              className="mx-4 bg-red-600 text-white p-1.5 font-bold rounded-md h-10 "
            >
              {user === null ? "Sign in" : "Sign out"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
