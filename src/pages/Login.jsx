import React from 'react'
import { Link } from 'react-router-dom'
import mark from '../assets/Login3.svg'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/axios'

function Login() {

  const {auth} =  useAuth(); 
  console.log(auth);


  const [ email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState({}); 


  const handleSubmit = async(e) => {
    e.preventDefault(); 

    if ([email, password].includes('')) {
      setAlerta({ msg : 'Todos los campos son obligatorios', error: true })
      return
    }

    try {
      
      const {data} = clienteAxios.post('usuario/login', {email, password})
      console.log(data);
      

    } catch (error) {
      console.log(error);
      
    }


    
  }

  const {msg} = alerta;
  
  return (
    <>
      <div className="ml-12">
        <h1 className='text-center  text-5xl font-extrabold '  > Application For  <span className='text-gray-700 '  > Cell Phone Sales</span> </h1> 
        <img className='transition duration-300 ease-in-out' src={mark} alt="" />
      </div>   

      <div className="mt-10 md:mt-5 shadow-xl px-5 py-2 rounded-xl bg-white">
      
        <div className="text-center font-sans sans-serif">
          <h2 className='font-extrabold text-5xl my-6'> Welcome Back! </h2>
          <p className='text-gray-800 mx-4 mb-14 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate asperiores repellendus, blanditiis laudantium adipisci </p>
        </div>

        {msg && <Alerta 
          alerta={alerta}
        />}

        <form action="" onSubmit={ handleSubmit }>
          <div className="mt-7">
            <label className='uppercase text-gray-600 black text-sm font-bold' >  </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-3 bg-gray-50 rounded-3xl' type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="mt-1">
            <label className='uppercase text-gray-600 black text-sm font-bold' >  </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-3 bg-gray-50 rounded-3xl text-gray-700' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
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
            <Link to="/olvide-password" className="block text-center text-gray-800 font-semibold text-lg my-3">Olvide mi Password</Link>
        </nav>

      </div>
    </>
  )
}

export default Login