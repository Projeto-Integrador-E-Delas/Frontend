
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servicos'
import FeatherIcon from 'feather-icons-react';


interface CardServicoProps {
  post: Servicos
}

function CardServicoSemLogin({post}: CardServicoProps) {
  
  return (
    <div className="rounded-lg transform transition duration-300">
      <figure className="mb-2">
        <div
          className="bg-auto h-40 rounded-md bg-no-repeat bg-center"
          style={{
            background: `url('${post.foto}') center center`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        {/* <img src={post.foto} alt="" className="h-64 w-full rounded-lg bg-cover" /> */}
      </figure>
      <div className="rounded-lg flex flex-col gap-1">
        <h5 className="text-xl text-purple-700 font-bold line-clamp-1">
          {post.nome}
        </h5>
        <div className="text-lg font-semibold">R$ {post.valor}</div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-500 line-clamp-1">{post.descricao}</span>
          <span className="text-gray-500">📞 {post.agendamento}</span>
          <span className="text-gray-500"> {post.categoria?.nome}</span>
        </div>

        <div className="flex gap-2 mt-3">
        <Link to={`/logar`}>
            <button
              type="button"
              className="text-white gap-2 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
            >
              <FeatherIcon icon="shopping-bag" />
              Solicitar
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default CardServicoSemLogin


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