
import { Link } from 'react-router-dom'
import Servicos from '../../../models/Servicos'


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
              className="text-white bg-purple-600 hover:bg-pruple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              <svg
                className="w-3.5 h-3.5 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>
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