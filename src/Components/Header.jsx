import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { BG_IMG, LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
  const handleGptSearchView = () => {
    dispatch(toggleGptSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLanguage = (language) => {
    dispatch(changeLanguage(language));
  };
  return (
    <div className="  ">
      <div className="   relative  ">
        <img
          className="absolute z-0 inset-0 w-screen h-screen bg-cover  bg-no-repeat bg-center opacity-60"
          src={BG_IMG}
          alt=""
        />
        <div className="  bg-black w-screen h-screen "></div>

        <div className=" absolute top-0 left-0 h-26 w-screen  py-8 flex justify-between  z-50  px-40 ">
          <div className="logo  ">
            <img className="h-16 w-48 object-cover" src={LOGO} alt="Logo" />
          </div>
          <div className="lang_sign k  flex">
            <button
              className=" bg-purple-800 h-10 rounded-lg font-semibold px-4  mx-4"
              onClick={handleGptSearchView}
            >
              {gptSearch ? "Homepage" : "Search Gpt"}
            </button>
            <div className="opacity-50">
              {gptSearch && (
                <select
                  className=" border border-gray-300 bg-black text-white p-1.5 rounded-md px-4 "
                  onChange={(e) => handleLanguage(e.target.value)}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
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
