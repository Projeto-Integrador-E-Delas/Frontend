import { Link } from "react-router-dom";
import img from "/src/assets/2.svg";

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white flex justify-center py-6">
        <div className="container flex justify-between items-start">
          <div className="img">
            <img src={img} width={120} height={120} />
          </div>

          <div className="mt-2 flex gap-6 justify-center items-center w-full">
            <Link
              to="/home"
              className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Inicio
            </Link>
            <Link
              to="/sobre"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Sobre nós
            </Link>
            <Link
              to="/servicos"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Serviços
            </Link>
            <Link
              to="/cadastrarServico"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Cadastrar Serviços
            </Link>
            <Link
              to="/categorias"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Categoria
            </Link>
            <Link
              to="/cadastrarCategoria"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Cadastrar Categoria
            </Link>
            </div>

            <div className="flex gap-6 justify-center items-center">
            <Link to="/logar" className="hover:underline">
              <button className="px-4 py-1 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                Entrar
              </button>
            </Link>
            <Link
              to="/"
              className="flex text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Sair
            </Link>
            </div>
            </div>
        </div>
    </>
  );
}

export default Navbar;
