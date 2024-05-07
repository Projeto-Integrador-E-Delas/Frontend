import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <>
      <div className='w-full bg-rose-400 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <div className='text-2xl font-bold uppercase'>E-delas</div>

          <div className='flex gap-4'>

            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
            <Link to='/usuarios/logar' className='hover:underline'>Entrar</Link>
            <Link to='/usuarios/cadastrar' className='hover:underline'>Cadastre-se</Link>
              
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar