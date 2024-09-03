import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'

import Login from './pages/Login'
import Registrar from './pages/Registrar'
import OlvidePassword from './pages/OlvidePassword'
import ConfirmarCuenta from './pages/ConfirmarCuenta'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AuthLayout/> } >
            <Route index element={ <Login/> } />
            <Route path='registrar' element={ <Registrar/> } />
            <Route path='OlvidePassword' element={ <OlvidePassword/> } />
            <Route path='confirmarCuenta/:id' element={ <ConfirmarCuenta/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
