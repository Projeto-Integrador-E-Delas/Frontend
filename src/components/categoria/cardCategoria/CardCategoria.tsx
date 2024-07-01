import { Link } from 'react-router-dom'
import Categorias from '../../../models/Categorias'


interface CardCategoriaProps {
    categoria: Categorias
  }

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden'>
      <header className='py-3 px-6 bg-purple-600 text-white font-bold text-2xl text-center'>{categoria.nome}</header>
      <img src={categoria.icone} className='self-center' width={"200"}/>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-white font-light tracking-wider bg-purple-800 hover:bg-purple-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-600 hover:bg-red-400 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria