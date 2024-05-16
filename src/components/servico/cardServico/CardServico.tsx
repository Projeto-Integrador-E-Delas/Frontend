
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servicos'


interface CardServicoProps {
  post: Servicos
}


// return (
//   <div className=" bg-white rounded-lg w-80 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
//   <figure className="mb-2">
//     <img src={post.foto} alt="" className="h-64 w-full" />
//   </figure>
//   <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
//     <div>
//       <h5 className="text-white text-2xl font-bold leading-none">
//         {post.nome}
//       </h5>
//       <span className="text-xs text-gray-400 leading-none">{post.descricao}</span>
//     </div>
//     <div className="flex items-center">
//       <div className="text-lg text-white font-light">
//         {post.valor}
//       </div>
     
//     </div>
//   </div>
//   </div>
// )

function CardServico({post}: CardServicoProps) {
  return (
    <div className=" bg-white rounded-lg w-80 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
      <figure className="mb-2">
        <img src={post.foto} alt="" className="h-64 w-full" />
      </figure>
      <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <h5 className="text-white text-2xl font-bold leading-none">
            {post.nome}
          </h5>
        <span className="text-white">{post.descricao}</span>
        <span className="text-white leading-none">{post.agendamento}</span>
        <span className="text-white leading-none">{post.categoria?.nome}</span>
        <div className="flex items-center">
          <div className="text-lg text-white font-light">
          R${post.valor}
          </div>

        </div>
    <div className="flex">
        <Link to={`/editarServico/${post.id}`} className='w-full text-white bg-transparent hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarServico/${post.id}`} className='text-white bg-transparent hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default CardServico