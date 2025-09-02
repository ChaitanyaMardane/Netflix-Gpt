import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkDataValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

// react  arrow funtion  exoort component
const Login = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);
  const [isValid, setIsValid] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const fullNameRef= useRef();

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
        // console.log("Creating user...");
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: fullNameRef.current.value,
              
            })
              .then(() => {
                  // console.log("User is signed in:", user);
                        const { uid, email, displayName } = auth.currentUser; 
                        dispatch(addUser({uid:uid , email:email, displayName:displayName}));
                         navigate("/browse");
                
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
         

            // ...
          })
          .catch((error) => {
            // console.log(isValid);

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
            // console.log(user);
             navigate("/browse");

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsValid(errorMessage);
             navigate("/login");
            // console.log(isValid);
          });
      }
    }
  };

  return (
    <div className="main   flex justify-center   m-auto ">
      <div className="z-0  absolute inset-0 bg-black  h-[70%] w-1/4 flex mx-auto mt-52 opacity-55 "></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="form z-10 absolute inset-0  p-8  rounded-md flex flex-col gap-4 border-gray-900 border-2 border-opacity-95 h-[70%] w-1/4   mx-auto mt-52"
      >
        {signUp ? (
          <h1 className="title font-bold text-white  text-3xl">Sign Up</h1>
        ) : (
          <h1 className="title font-bold text-white  text-3xl">Sign in</h1>
        )}

        {signUp && (
          <input
            ref={fullNameRef}
            className="mt-10 h-12 p-2 bg-black bg-opacity-0 border-white text-white border-2  w-full rounded-md"
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
              !signUp && "mt-10"
            } h-12 p-2 bg-black bg-opacity-0  text-white  border-white  border-2  w-full rounded-md`}
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
              className="h-12 p-2  w-full  text-white  bg-black bg-opacity-0 border-white  border-2  rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          ) : (
            <div className="flex flex-col gap-4">
              <input
                ref={passwordRef}
                className="h-12 p-2  w-full  text-white  bg-black bg-opacity-0 border-white  border-2  rounded-md"
                type="password"
                name="create-password"
                id="create-password"
                placeholder="Create Password"
              />
              <input
                className="h-12 p-2  w-full  text-white  bg-black bg-opacity-0 border-white  border-2  rounded-md"
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
          className="bg-red-600 text-white h-12 font-bold w-full rounded-md"
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
              <span className="text-zinc-500">Already registered?</span> Sign up
              now.
            </Link>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
