// import {  } from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { checkDataValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constant";

// react  arrow funtion  exoort component
const Login = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const fullNameRef = useRef();

  const handleSubmit = (e) => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (signUp) {
      const confirmPassword = confirmPasswordRef.current.value;

      const validationError = checkDataValidation(
        email,
        password,
        confirmPassword
      );
      setIsValid(validationError);
      if (isValid === null) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: fullNameRef.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
              })
              .catch((error) => {
                // An error occurred
                // ...
              });

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsValid(errorCode + "-" + errorMessage);
          });
      }

      // Handle sign up or sign in
    } else {
      const validationError = checkDataValidation(email, password);
      setIsValid(validationError);

      if (isValid === null) {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsValid(errorMessage);
          });
      }
    }
  };

  return (
    <div className="main  realtive  flex justify-center   m-auto ">
      <div className="absolute inset-0 w-full h-full bg-black z-1  bg-opacity-100 "></div>
      <img
        className="absolute z-0 inset-0 w-full h-full bg-cover opacity-50 bg-no-repeat  bg-center"
        src={BG_IMG}
        alt=""
      />
      <div className="z-0  absolute inset-0 bg-black w-[80vw]  h-[70%]  md:h-[70%]  md:w-1/4 flex mx-auto mt-40 md:mt-52 opacity-55 "></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="form z-10 absolute inset-0 px-8 mx-auto  md:p-8 w-[80vw] md:w-1/4 rounded-md flex flex-col gap-2 md:gap-4  border-gray-900 border-2 border-opacity-95 h-[70%] md:h-[70%] w-1/4 mt-40  md:mt-52"
      >
        {signUp ? (
          <h1 className="title font-bold text-white text-xl md:text-3xl mt-4 md:mt-0 ">Sign Up</h1>
        ) : (
          <h1 className="title font-bold text-white   text-xl mt-4  md:text-3xl">Sign in</h1>
        )}

        {signUp && (
          <input
            ref={fullNameRef}
            className="  mt-2 md:mt-6  h-8 md:h-12 p-2 bg-black bg-opacity-0 border-white text-white border-2  w-full rounded-md"
            type="text"
            name="Full-Name"
            id="Full-Name"
            placeholder="Full Name"
          />
        )}
        <div className="email ">
          <input
            ref={emailRef}
            className={`${
              !signUp && " mt-4 md:mt-10"
            } h-8 md:h-10  p-2 bg-black bg-opacity-0  text-white  border-white  border-2  w-full rounded-md`}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="password">
          {!signUp ? (
            <input
              ref={passwordRef}
              className=" h-8 md:h-10  p-2  w-full  text-white  bg-black bg-opacity-0 border-white  border-2  rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          ) : (
            <div className="flex flex-col gap-4">
              <input
                ref={passwordRef}
                className=" h-8 md:h-10  p-2  w-full  text-white  bg-black bg-opacity-0 border-white  border-2  rounded-md"
                type="password"
                name="create-password"
                id="create-password"
                placeholder="Create Password"
              />
              <input
                className=" h-8 md:h-10  p-2  w-full  text-white  bg-black bg-opacity-0 border-white  border-2  rounded-md"
                type="password"
                ref={confirmPasswordRef}
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
              />
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-red-600 text-white h-10 md:py-2 font-bold w-full rounded-md"
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        {isValid && <p className="text-red-600">{isValid}</p>}
        <Link className=" text-white text-center underline self-start">
          Forgot Password?
        </Link>
        <p className="w-full  text-center text-xl text-gray-500 ">OR</p>
        {!signUp && (
          <button className="bg-gray-500 p-2 text-white font-bold rounded-md">
            Use a sign in code
          </button>
        )}

        <label className="text-lg text-white">
          <input className="h-4 w-4 cursor-pointer" type="checkbox" /> Remember
          me
        </label>
        <p>
          {signUp ? (
            <Link
              onClick={() => setSignUp(false)}
              className="text-lg text-white font-semibold "
            >
              {" "}
              <span className="text-zinc-500">New to NetFlix?</span>{" "}
              <span className="hover:underline">Sign in now.</span>
            </Link>
          ) : (
            <Link
              onClick={() => setSignUp(true)}
              className="text-lg text-white font-semibold hover:underline"
            >
              {" "}
              <span className="text-zinc-500 block md:inline-block">Already registered?</span> Sign up
              now.
            </Link>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
