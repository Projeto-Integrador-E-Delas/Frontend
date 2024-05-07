import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh'>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/usuarios/logar" element={<Login />} />
              <Route path="/usuarios/cadastrar" element={<Cadastro />} />

            </Routes>
          </div>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
