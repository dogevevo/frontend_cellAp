import React from 'react'
import mark from '../assets/Login2.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function OlvidePassword() {

  

  return (
    <>
      <div className=" ">
        <h1 className='text-center  text-5xl font-extrabold '  > Application For  <span className='text-gray-700 '  > Cell Phone Sales</span> </h1> 
        <img className='transition duration-300 ease-in-out' src={mark} alt="" />
      </div>      

      <div className="mt-10 md:mt-5 shadow-xl px-5 py-2 rounded-xl bg-white">
      
        <div className="text-center font-sans sans-serif">
          <h2 className='font-extrabold text-5xl my-6'> Recuperar <span className='text-gray-700 '  > Password </span>  ! </h2>
          <p className=' roger text-gray-600 mx-4 mb-14 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate asperiores repellendus, blanditiis laudantium adipisci </p>
        </div>

        <form action="">

          <div className="mt-5">
            <label className='uppercase text-gray-600 black text-sm font-bold ' > Email </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-1 bg-gray-50 rounded-3xl text-gray-700' type="password" placeholder='Password' />
          </div>

          <input type="submit" value="Crear Cuenta" className="bg-black w-full py-3 rounded-xl text-white uppercase font-bold mt-5 mb-10 hover:cursor-pointer hover:bg-gray-800"/>

          <nav className="mt-7 lg:flex lg:justify-between">
            <Link to="/" className="block text-center text-gray-500 text-lg my-3">¿Ya tienes una cuenta? inicia seccion</Link>
            <Link to="/registrar" className="block text-center text-gray-500  text-lg my-3">¿No tienes una cuenta? Registrate</Link>
          </nav>

        </form>

        {/* <div className="mt-4 mb-8 font-bold text-sm flex justify-end">
          <a href=""> Forgot the password ? </a>
        </div> */}

        {/* <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="mx-4 text-gray-500">or continue with</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>


        <div className=" flex justify-evenly my-10 ">
          <i class="fi fi-brands-twitter-alt text-5xl"></i>
          <i class="fi fi-brands-instagram text-5xl"></i>
          <i class="fi fi-brands-google text-5xl"></i>
        </div> */}


      </div>
    </>
  )
}

export default OlvidePassword