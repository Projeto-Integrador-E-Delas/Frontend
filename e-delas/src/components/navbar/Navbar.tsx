import React from 'react'
import { Link } from 'react-router-dom'
import img from '/src/assets/2.svg'


function Navbar() {
 
    return (
    <>
     <div className='w-full bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg items-center">
            <div className='img'><img src={img} width={140} height={120}/></div>

            <div className='flex gap-6'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre nós</Link>    
            <Link to='/usuarios/logar' className='hover:underline'>Entrar</Link>
            <Link to='/usuarios/cadastrar' className='hover:underline'>Cadastrar</Link>  
            <Link to='/' className='hover:underline'>Sair</Link>             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar