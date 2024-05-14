import { Link } from 'react-router-dom'
import Categorias from '../../../models/Categorias'


interface CardCategoriaProps {
    categoria: Categorias
  }

function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
      <p className='p-8 text-2xl bg-slate-200 h-full'>{categoria.icone}</p>
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