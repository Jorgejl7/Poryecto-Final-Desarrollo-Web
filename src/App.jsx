import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exec element={<Inicio />} />
        <Route path="/Proyectos" exec element={<Proyectos />} />
        <Route path="/Contacto" exec element={<Contacto />} />
      </Routes>
    </>
  )
}

export default App
