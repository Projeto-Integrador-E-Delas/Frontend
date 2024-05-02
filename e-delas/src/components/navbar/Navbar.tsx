import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-rose-400 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>E-delas</div>

            <div className='flex gap-4'>
              
            <Link to='/login' className='hover:underline'>Home</Link>
            <Link to='/sobreNos' className='hover:underline'>Sobre Nós</Link>
            <Link to='/contato' className='hover:underline'>Contato</Link>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar