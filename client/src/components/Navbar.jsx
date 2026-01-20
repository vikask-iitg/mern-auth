// import React, { useContext } from "react";
// import { assets } from "../assets/assets.js";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext.jsx";
// import { toast } from "react-toastify";
// import axios from "axios";

// const Navbar = () => {

//   const navigate = useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedin } =
//     useContext(AppContext);

//   const sendVerificationOtp = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(
//         backendUrl + "/api/auth/send-verify-otp",
//       );

//       if (data.success) {
//         navigate("/email-verify");
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || error.message || "Server error",
//       );
//     }
//   };

//   const logout = async () => {
//     try {
//       axios.defaults.withCredentials = true;
//       const { data } = await axios.post(backendUrl + "/api/auth/logout");
//       data.success && setIsLoggedin(false);
//       data.success && setUserData(false);
//       navigate("/");
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || error.message || "Server error",
//       );
//     }
//   };

//   return (
//     <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 z-50">
//       <img src={assets.logo} alt="" className="w-28 sm:w-32" />
//       {userData ? (
//         <div
//           className="w-8 h-8 flex justify-center items-center rounded-full bg-black
//          text-white relative group"
//         >
//           {userData.name[0].toUpperCase()}
//           <div
//             className="absolute hidden group-hover:block top-0 right-0 z-10 text-black
//           rounded pt-10"
//           >
//             <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
//               {!userData.isAccountVerified && (
//                 <li
//                   onClick={sendVerificationOtp}
//                   className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
//                 >
//                   Verify Email
//                 </li>
//               )}
//               <li
//                 onClick={logout}
//                 className="py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10"
//               >
//                 Logout
//               </li>
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <button
//           onClick={() => navigate("/login")}
//           className="flex items-center gap-2 border border-gray-500 
//                 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
//         >
//           Login
//           <img src={assets.arrow_icon} alt="" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );

      if (data.success) {
        toast.success(data.message);
        navigate("/email-verify");
        setOpen(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "Server error"
      );
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");

      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);
        setOpen(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "Server error"
      );
    }
  };

  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 z-50">
      <img src={assets.logo} alt="logo" className="w-28 sm:w-32" />

      {userData ? (
        <div className="relative group">
          {/* Avatar */}
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="w-8 h-8 flex justify-center items-center rounded-full
            bg-black text-white cursor-pointer select-none"
          >
            {userData.name[0].toUpperCase()}
          </div>

          {/* Dropdown */}
          <div
            className={`
              absolute top-0 right-0 z-10 pt-10
              ${open ? "block" : "hidden"}
              group-hover:block
            `}
          >
            <ul className="list-none m-0 p-2 bg-gray-100 text-sm rounded shadow-md min-w-[140px]">
              {!userData.isAccountVerified && (
                <li
                  onClick={sendVerificationOtp}
                  className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded"
                >
                  Verify Email
                </li>
              )}

              <li
                onClick={logout}
                className="py-1 px-2 hover:bg-gray-200 cursor-pointer rounded"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 border border-gray-500
          rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
        >
          Login
          <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Navbar;

