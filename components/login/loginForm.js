import React from 'react';
// import './slideNavbarStyle.css'; // Make sure to import your CSS file
// import 'https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap';


function LoginForm({loginHandler}) {
  return (
    <div className='body_login'>
    <div className="main_login">
      <input className='login_input' type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form >
          <label className='login_label' htmlFor="chk" aria-hidden="true">Sign up</label>
          <input className='login_input' type="text" name="txt" placeholder="User name" required />
          <input className='login_input' type="email" name="email" placeholder="Email" required />
          <input className='login_input' type="password" name="pswd" placeholder="Password" required />
          <button className='login_buttom'>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={loginHandler}>
          <label className='login_label' htmlFor="chk" aria-hidden="true">Login</label>
          <input className='login_input' type="text" name="userName" placeholder="User Name" required />
          <input className='login_input' type="password" name="password" placeholder="Password" required />
          <button className='login_buttom'>Login</button>
        </form>
      </div>
    </div>
  
    </div>
  );
}

export default LoginForm;
