import React from 'react'
import mark from '../assets/Login2.svg'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from '../config/axios'
import axios from 'axios'
import Alerta from '../components/Alerta'

function ConfirmarCuenta() {

  const [cuentaConfirmada, setCuentaConfirmada ] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({});


  const params = useParams(); 
  const {token} = params
  console.log(token);
  

  useEffect(()  => {
    const confirmarCuenta = async () => {
      try {

        const url = `http://localhost:8000/api/usuarios/confirmar/${token}`; 
        const {data} = await axios.get(url);
        setCuentaConfirmada(true)
        setAlerta({
          msg : data.msg,
        });
        
      } catch (error) {
        setAlerta({
          msg : error.response.data.msg, 
          error : true, 
        })
      }

      setCargando(false)
    }

    confirmarCuenta(); 
  }, [])

  return (
    <>
    <div className="ml-12">
      <h1 className='text-center  text-5xl font-extrabold '  > Application For  <span className='text-gray-700 '  > Cell Phone Sales</span> </h1> 
      <img className='transition duration-300 ease-in-out' src={mark} alt="" />
    </div>      

    <div className="mt-10 md:mt-5 shadow-xl px-5 py-2 rounded-xl bg-white">
    
    {!cargando && <Alerta
      alerta={alerta}
    />}

    {cuentaConfirmada && 
       <Link to="/" className="block text-center text-gray-800 text-lg font-semibold my-3">Iniciar Sesion  </Link>
    }
    

    </div>
  </>
  )
}

export default ConfirmarCuenta