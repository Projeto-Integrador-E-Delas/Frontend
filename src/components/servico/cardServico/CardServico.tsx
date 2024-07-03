import { Link } from "react-router-dom";
import Servicos from "../../../models/Servicos";
import FeatherIcon from "feather-icons-react";

interface CardServicoProps {
  post: Servicos;
}

function CardServico({ post }: CardServicoProps) {
  return (
    <div className="rounded-lg transform transition duration-300">
      <figure className="mb-2">
        <div
          className="bg-auto h-40 rounded-md bg-no-repeat bg-center relative"
          style={{
            background: `url('${post.foto}') center center`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="flex items-center justify-center bg-white"
            style={{
              top: 8,
              right: 8,
              position: "absolute",
              height: "40px",
              width: "40px",
              borderRadius: "100%",
            }}
          >
            <div
              style={{
                height: "26px",
                width: "26px",
                background: `url('${post.categoria?.icone}') center center`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
        </div>
        {/* <img src={post.foto} alt="" className="h-64 w-full rounded-lg bg-cover" /> */}
      </figure>
      <div className="rounded-lg flex flex-col gap-1">
        <h5 className="text-xl text-purple-700 font-bold line-clamp-1">
          {post.nome}
        </h5>
        <div className="text-lg font-semibold">R$ {post.valor} / hora</div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-500 line-clamp-1">{post.descricao}</span>
          <span className="text-gray-500 flex items-center gap-2">
            <FeatherIcon icon="phone" className="h-4 w-4" /> {post.agendamento}
          </span>
          <span className="text-gray-500"> {post.categoria?.nome}</span>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-2 mt-3">
            <Link to={`/editarServico/${post.id}`}>
              <button
                type="button"
                className="text-white gap-2 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
              >
                <FeatherIcon icon="edit" />
                Editar
              </button>
            </Link>
          </div>
          <div className="justify-end gap-2 mt-3">
            <Link to={`/deletarServico/${post.id}`}>
              <button
                type="button"
                className="text-white gap-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
              >
                <FeatherIcon icon="trash" />
                Excluir
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardServico;
