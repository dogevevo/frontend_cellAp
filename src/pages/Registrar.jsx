import React from 'react';
import mark from '../assets/Login2.svg'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';

function Registrar() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('')

  const [alerta , setAlerta] = useState({}); 

  const handleSubmit = async (e) => {
    e.preventDefault()

    if ([ nombre, email, password, setRepeatPassword].includes('')) {
      setAlerta({msg :  'todo los campos son obligatorios', error : true});
      return
    }
    
    if (password !== repeatPassword) {
      setAlerta({ msg : 'los password no son iguales' , error : true});
      return; 
    }

    if (password.length <= 6 ) {
      setAlerta({ msg :  'El password es muy corto, minimo 6 caracteres', error : true});
      return;   
    }

    setAlerta({})

    try {
      
      await clienteAxios.post('/usuarios', {nombre, email, password})

      setAlerta({ msg :  'mensaaje enviado, revisa tu correo para verificar' })
      

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
          <h2 className='font-extrabold text-5xl my-6'> Registrar <span className='text-gray-700 '  > Nuevo Usuario </span>  ! </h2>
          <p className=' roger text-gray-800 mx-4 mb-14 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate asperiores repellendus, blanditiis laudantium adipisci </p>
        </div>

        {msg &&  <Alerta 
          alerta =  {alerta}
        />}

        <form action="" onSubmit={ handleSubmit } >
          <div className="mt-7">
            <label className='uppercase text-gray-600 black text-lg font-bold ' > Nombre </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-1 bg-gray-50 rounded-3xl' type="text" placeholder='text' value={nombre} onChange={e => setNombre(e.target.value)}/>
          </div>

          <div className="mt-5">
            <label className='uppercase text-gray-600 black text-sm font-bold ' > Email </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-1 bg-gray-50 rounded-3xl text-gray-700' type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="mt-5">
            <label className='uppercase text-gray-600 black text-sm font-bold ' > Password </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-1 bg-gray-50 rounded-3xl text-gray-700' type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value) } />
          </div>

          <div className="mt-5">
            <label className='uppercase text-gray-600 black text-sm font-bold ' > Repeat Password </label>
            <input className='border-solid border-2 border-gray-500 w-full p-3 mt-1 bg-gray-50 rounded-3xl text-gray-700' type="password" placeholder='Repeat Password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
          </div>


          <input type="submit" value="Crear Cuenta" className="bg-black w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-gray-800"/>



          <nav className="mt-7 lg:flex lg:justify-between">
              <Link to="/" className="block text-center text-gray-800 text-lg font-semibold my-3">Iniciar Sesion  </Link>
              <Link to="/OlvidePassword" className="block text-center text-gray-800 font-semibold text-lg my-3">Olvide mi Password</Link>
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

export default Registrar