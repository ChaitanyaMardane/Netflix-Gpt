import React from "react";

const Header = () => {
  return (
    <div className=" relative">
      <img
        className="h-full w-full object-cover opacity-40"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full  opacity-100">
            <div className=" py-8 flex justify-between  px-40 ">
        <div className="logo  ">
          <img
            className="h-16 w-48 object-cover"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            
            alt=""
            srcset=""
          />
        </div>
        <div className="lang_sign k  flex">
          <div className="opacity-50">
            <select className=" border border-gray-300 bg-black text-white p-1.5 rounded-md px-4 ">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>

          <button className="mx-4 bg-red-600 text-white p-1.5 font-bold rounded-md h-10 ">
            Sign in
          </button>
        </div>
      </div>

      </div>
      
    </div>
  );
};

export default Header;
