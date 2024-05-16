
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servicos'


interface CardServicoProps {
  post: Servicos
}


{/* <div className="flex">
<Card nome="Teste" descricao="Teste" preco="Teste"/>
<Card nome="Teste2" descricao="Teste2" preco="Teste2"/>
<Card nome="Teste3" descricao="Teste3" preco="Teste3"/>
</div> */}



function CardServico({post}: CardServicoProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{post.nome}</h4>
          <p>Categoria: {post.categoria?.nome}</p>
          <p>Agendamento: {post.agendamento}</p>
          <p>Valor: {post.valor}</p>
          <p>Descrição: {post.descricao}</p>
          <p>Foto: {post.foto}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarServico/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarServico/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardServico