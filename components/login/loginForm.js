import React from 'react';

function LoginForm({ loginHandler}) {
  
  return (
   
        <div className="login">
          <form onSubmit={loginHandler}>
            <label className='login_label' htmlFor="chk" aria-hidden="true">Login</label>
            <input className='login_input' type="text" name="userName" placeholder="User Name" required />
            <input className='login_input' type="password" name="password" placeholder="Password" required />
            <button className='login_buttom'>Login</button>
          </form>
        </div>
     
  );
}

export default LoginForm;
