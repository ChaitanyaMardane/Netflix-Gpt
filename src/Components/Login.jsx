import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
// react  arrow funtion  exoort component
const Login = () => {
    const [signUp,setSignUp] = useState(false);

    

  return (
    <div className="main   flex justify-center   m-auto ">
      <div className="z-0  absolute inset-0 bg-black  h-4/5 w-1/4 flex mx-auto mt-32 opacity-55 "></div>
      <form className="form z-10 absolute inset-0  p-8  rounded-md flex flex-col gap-4 border-gray-900 border-2 border-opacity-95 h-4/5 w-1/4   mx-auto mt-32">

    {  (signUp)? <h1 className="title font-bold text-white  text-3xl">Sign Up</h1> :<h1 className="title font-bold text-white  text-3xl">Sign in</h1> }

        {signUp && <input
            className="h-12 p-2 bg-black bg-opacity-0 border-white  border-2  w-full rounded-md"
            type="text"
            name="Full-Name"
            id="Full-Name"
            placeholder="Full Name"
          />}
        <div className="email ">
          <input
            className="h-12 p-2 bg-black bg-opacity-0 border-white  border-2  w-full rounded-md"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="password">
            {(!signUp) ?
             <input
            className="h-12 p-2  w-full  bg-black bg-opacity-0 border-white  border-2  rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />:
          <div className='flex flex-col gap-4'  >
              <input
            className="h-12 p-2  w-full  bg-black bg-opacity-0 border-white  border-2  rounded-md"
            type="password"
            name="create-password"
            id="create-password"
            placeholder="Create Password"
          />
          <input
            className="h-12 p-2  w-full  bg-black bg-opacity-0 border-white  border-2  rounded-md"
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
          />
          </div>
        

                }
         
        </div>

        <button className="bg-red-600 text-white h-12 font-bold w-full rounded-md">
            { (signUp) ? "Sign Up" : "Sign In"}
        </button>
        <Link className=" text-white text-center underline self-start">
          Forgot Password?
        </Link>
        <p className="w-full  text-center text-xl text-gray-800 ">OR</p>
         {(!signUp) &&  <button className="bg-slate-400 p-2 text-white font-bold rounded-md">
            Use a sign in code
        </button>}
       
        
        <label className="text-lg text-white">
          <input className="h-4 w-4 cursor-pointer" type="checkbox" /> Remember
          me
        </label>
        <p>
         
          { (signUp) ? <Link onClick={() => setSignUp(false)} className="text-lg text-white font-semibold hover:underline">  <span className="text-zinc-500">New to NetFlix?</span>Sign in now.</Link> : <Link onClick={() => setSignUp(true)} className="text-lg text-white font-semibold hover:underline"> <span className="text-zinc-500">Already registered?</span> Sign up now.</Link>}
        </p>
      </form>
    </div>
  );
}

export default Login
