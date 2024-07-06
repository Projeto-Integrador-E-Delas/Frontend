import { Link } from "react-router-dom";
import Categorias from "../../../models/Categorias";
import FeatherIcon from "feather-icons-react";

interface CardCategoriaProps {
  categoria: Categorias;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="rounded-lg transform transition duration-300">
      <figure className="mb-2">
        <div
          className="bg-auto h-40 rounded-lg bg-no-repeat bg-center"
          style={{
            background: `url('${categoria.icone}') center center`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </figure>
      <div className="w-full rounded-lg flex flex-col gap-4">
        <h5 className="text-xl text-center text-purple-700 font-bold line-clamp-1">
          {categoria.nome}
        </h5>
        <div className="flex gap-2 w-full">
          <Link className="w-full" to={`/editarCategoria/${categoria.id}`}>
            <button
              type="button"
              className="text-white justify-center w-full gap-2 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
            >
              <FeatherIcon icon="edit" />
              Editar
            </button>
          </Link>
          <Link className="w-full" to={`/deletarCategoria/${categoria.id}`}>
            <button
              type="button"
              className="text-white justify-center w-full gap-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
            >
              <FeatherIcon icon="trash" />
              Excluir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategoria;
