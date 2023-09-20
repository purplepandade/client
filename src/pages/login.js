// Home.js

import React from 'react';
  
function Login (){
    return <div className='flex flex-col text-xl items-center justify-center h-full'>

    <div className='mb-10 grid grid-cols-1 gap-5 p-10 rounded-md shadow-md'>
        <div>
        <div className='mb-5'>
            <label className='block' for="email">Email:</label>
            <input type="email" name="email" className='border-2 border-solid border-grey rounded-sm' placeholder='Your Email'></input>
        </div>

        <div>
            <label for="password" className='block'>Password:</label>
            <input type="password" name="password" className='border-2 border-solid border-grey rounded-sm' placeholder='Your Password'></input>
        </div>
        </div>
        <div className='Button Button--primary' href="#">Login</div>
        <div className='Button Button--primary' href="#">Forgot Password?</div>
        </div>
    </div>
}
  
export default Login;