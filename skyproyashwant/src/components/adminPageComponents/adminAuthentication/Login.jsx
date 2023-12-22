// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../../context/AuthContext";
// import axios from "axios";
// // import useNavigate from 'react-router-dom'
// import AccountContext from "../../utils/AccountContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login, setLogin, setUserData } = useContext(AccountContext);
//   console.log("Login>>", login);

//   useEffect(() => {
//     if (login) {
//       navigate("/dashboard");
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }
//     // eslint-disable-next-line
//   }, [login]);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState({});
//   const validateForm = () => {
//     const newErrors = {};
//     if (formData.email.trim() === "") {
//       newErrors.email = "Email is required.";
//       alert("Please enter an email address");
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Invalid email Format";
//       alert("Invalid email format");
//     } else if (formData.password === "") {
//       newErrors.password = "Password is required.";
//       alert("Please enter a password");
//     }
//     setError(newErrors);
//     return Object.keys(newErrors).length === 0; // Form is valid
//   };
//   // const [error, setError] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const {isLoggedIn, setIsLoggedIn} = useAuth()
//   // const handleSubmit = async (e) =>{
//   //     e.preventDefault();
//   //     try {
//   //         await axios.post('localhost:5000/users/signin')
//   //         alert('Registered Successfully')
//   //     } catch (error) {
//   //         console.error('Error:' , error)
//   //         alert('Registration Failed')

//   //     }
//   // }
//   // useEffect(() => {
//   //     if (isLoggedIn){
//   //         navigate("/account/dashboard");
//   //     }
//   //     // eslint-disable-next-line react-hooks/exhaustive-deps
//   // },[isLoggedIn]);

//   // const validateForm = () => {
//   //     if (email.trim() === '') {
//   //         alert('Please enter an email address');
//   //         return false;
//   //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//   //         alert('Invalid email format');
//   //         return false;
//   //     } else if (password === '') {
//   //         alert('Please enter a password');
//   //         return false;
//   //     }

//   //     return true; // Form is valid
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const { email, password } = formData;
//       try {
//         const config = {
//           headers: {
//             "Content-type": "application/json",
//           },
//         };
//         const { data } = await axios.post(
//           "https://my-punjabi-admin-server.onrender.com/api/users/signin",
//           { email, password },
//           config
//         );
//         sessionStorage.setItem("userInfo", JSON.stringify(data));

//         window.location.reload(false); //seen from comment lect. 12 youtube
//         setLogin(true);
//         setUserData(data);
//         navigate("/dashboard");

//         // alert('Login successful');
//       } catch (err) {
//         console.error("Error:", err);
//         alert("Login failed");
//       }
//     } else {
//       // Handle invalid form case if needed
//       alert("Please enter valid input");
//     }
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="register_form">
//       <div className="form_design relative z-9 bg-white mx-auto w-full grid rounded-[10px]">
//         <h1 className="text-center uppercase">Login</h1>
//         <p
//           className={`text-[16px] text-left text-[#FF0000] font-semibold mb-[10px] ${
//             Object.keys(error).length > 0 ? "block" : "hidden"
//           }`}
//         >
//           {/* {/ Error: {error.message || "An error occurred"} /} */}
//         </p>
//         <label htmlFor="email" className="form-label">
//           Email
//         </label>
//         <input
//           className="inpit_row form-input"
//           name="email"
//           type="text"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <label htmlFor="password" className="form-label">
//           Password
//         </label>
//         <input
//           className="inpit_row form-input"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <button className="form-action" type="Submit" onClick={handleSubmit}>
//           Login
//         </button>
//         {/* {/ <p className="text-[16px] text-center mt-[15px]">Don't have an account? <Link to="/account?login=false" className="font-medium text_link">Register</Link></p> /} */}
//       </div>
//     </div>
//   );
// };

// export default Login;
