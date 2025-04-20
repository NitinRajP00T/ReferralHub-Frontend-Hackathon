// import { useState } from "react";

// export function Accound() {
//   const [usedetail, setuserdetail] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setuserdetail((predata) => {
//       return { ...predata, [name]: value };
//     });


// const handleclick =(){

// }

//   };
//   return (
//     <>
//       <h2>Creat your accound</h2>
//       <input
//         type="text"
//         name="name"
//         value="{usedetail.name}"
//         placeholder="Enter Your Name"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="email"
//         value="{usedetail.email}"
//         placeholder="email"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="password"
//         value="{usedetail.password"
//         placeholder="password"
//         onChange={{ handleChange }}
//       />
//       <button onClick={handleclick}>Submit</button>
//     </>
//   );
// }
