// import React from 'react';

// export default function RegisterForm({  registrationHandler }) {
//   const handleRegistration = (event) => {
//     event.preventDefault();

//     // Get the registration form data and pass it to the registrationHandler
//     const formData = new FormData(event.target);
//     const registrationData = {
//         username: formData.get('username'),
//         email: formData.get('email'),
//         password: formData.get('password'),
//         retypePassword: formData.get('retypePassword'),
//     };

//     // Pass the registrationData to the registrationHandler
//     registrationHandler(registrationData);

// return (
//   <div className='body_login'>
//     <div className="main_login">
//       <input className='login_input' type="checkbox" id="chk" aria-hidden="true" />

//       <div className="signup">
//         <form onSubmit={handleRegistration}>
//           <label className='login_label' htmlFor="chk" aria-hidden="true">Sign up</label>
//           <input className='login_input' type="text" name="username" placeholder="User name" required />
//           <input className='login_input' type="email" name="email" placeholder="Email" required />
//           <input className='login_input' type="password" name="password" placeholder="Password" required />
//           <input className='login_input' type="password" name="retypePassword" placeholder="Password" required />

//           <button className='login_buttom'>Sign up</button>
//         </form>
//       </div>
//     </div>
//   </div>
// ); // <- This is the closing parenthesis for the 'return' statement

 