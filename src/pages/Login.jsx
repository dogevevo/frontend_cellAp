import React from 'react'
import { Link } from 'react-router-dom'


<style>
{
  
}
</style>

function Login() {
  return (
    <>
      <div className="">
        <div className="">
          
           <img src="../assets/imageLogin.jpg" alt="" />
          
        </div>
      </div>

      <div className="mt-10 md:mt-5 shadow-xl px-5 py-2 rounded-xl bg-white">
      
        <div className="text-center font-sans sans-serif">
          <h2 className='font-extrabold text-5xl my-6'> Welcome Back! </h2>
          <p className='text-gray-800 mx-4 mb-14 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate asperiores repellendus, blanditiis laudantium adipisci </p>
        </div>

        <form action="">
          <div className="mt-7">
            <label className='uppercase text-gray-600 black text-sm font-bold' >  </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-3 bg-gray-50 rounded-3xl' type="email" placeholder='Email' />
          </div>

          <div className="mt-1">
            <label className='uppercase text-gray-600 black text-sm font-bold' >  </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-3 bg-gray-50 rounded-3xl text-gray-700' type="password" placeholder='Password' />
          </div>

          <div className="mt-4 mb-8 font-bold text-sm flex justify-end">
            <a href=""> Forgot the password ? </a>
          </div>

          <div className="w-full">
            <input type="submit" value='Login'  className='bg-black w-full p-3 py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 '/>
          </div>



        </form>


        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="mx-4 text-gray-500">or continue with</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>


        <div className=" flex justify-evenly my-10 ">
          <i className="fi fi-brands-twitter-alt text-5xl"></i>
          <i className="fi fi-brands-instagram text-5xl"></i>
          <i className="fi fi-brands-google text-5xl"></i>
        </div>

        <nav className="mt-7 lg:flex lg:justify-between">
            <Link to="/registrar" className="block text-center text-gray-800 text-lg font-semibold my-3">Registrarse</Link>
            <Link to="/OlvidePassword" className="block text-center text-gray-800 font-semibold text-lg my-3">Olvide mi Password</Link>
        </nav>

      </div>
    </>
  )
}

export default Login