import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import mark from '../assets/Login2.svg'
import clienteAxios from '../config/axios';

function NuevoPassword() {

  const [newPassword, setNewPassword  ] = useState('');
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido ] = useState(false); 
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams();
  const {token} = params;
  
  useEffect(()  => {
      const ValidarToken = async () => {
        try {
          await clienteAxios(`usuarios/olvide-password/${token}`); 
          setAlerta({msg : 'coloca una nueva contraseña'})
          setTokenValido(true)
        } catch (error) {
          setAlerta({ msg : 'Hubo un error en el enlace', error : true })
        }   
      }

      ValidarToken(); 
  }, [])

    


  const handleSubmit = async (e) => {
      e.preventDefault(); 

      if (newPassword.length < 6 ) {
          setAlerta({ msg : 'El password debe de tener minimo 6 caracteres', error : true }); 
          setPasswordModificado(true)
          return; 
      }

      try {
          const url = `usuarios/olvide-password/${token}`; 
          const {data} = await clienteAxios.post(url, {password})
          
          setAlerta({ msg : data.msg  })
          setPasswordModificado(true)
                      
      } catch (error) {
          setAlerta({ msg : error.response.data.msg, error : true })
      }
  }

  const { msg } = alerta; 

  return (
    <>
      <div className=" ">
        <h1 className='text-center  text-5xl font-extrabold '  > Application For  <span className='text-gray-700 '  > Cell Phone Sales</span> </h1> 
        <img className='transition duration-300 ease-in-out' src={mark} alt="" />
      </div>      

      <div className="mt-10 md:mt-5 shadow-xl px-5 py-2 rounded-xl bg-white">
      
        <div className="text-center font-sans sans-serif">
          <h2 className='font-extrabold text-5xl my-6'> Nuevo <span className='text-gray-700 '  > Password </span>  ! </h2>
          <p className=' roger text-gray-600 mx-4 mb-14 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate asperiores repellendus, blanditiis laudantium adipisci </p>
        </div>

        {msg && <Alerta
          alerta = {alerta}
        />}

        { tokenValido && (
          <>
            <form onSubmit={handleSubmit}>

                <div className="mt-5">
                    <label className='uppercase text-gray-600 black text-sm font-bold ' > Nuevo Password </label>
                    <input className='border-solid border-2 border-gray-500 w-full p-3 mt-1 bg-gray-50 rounded-3xl text-gray-700' type="password" placeholder='Nuevo password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                </div>

                <input type="submit" value="Recuperar Password" className="bg-black w-full py-3 rounded-xl text-white uppercase font-bold mt-5 mb-10 hover:cursor-pointer hover:bg-gray-800"/>

            </form>
          </>
        )}

        { passwordModificado && <Link to="/" className="block text-center text-gray-500 text-lg my-3">¿Ya tienes una cuenta? inicia seccion</Link>}


      </div>
    </>
  )
}

export default NuevoPassword