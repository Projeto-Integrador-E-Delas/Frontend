import { Link, useNavigate } from "react-router-dom";
import img from "/src/assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Até mais!", "sucesso");
    navigate("/logar");
  }

  let navBarComponent;

  if (usuario.token !== "") {
    navBarComponent = (
      <nav className="sticky flex items-center top-0 h-20 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white text-xl">
        <div className="container px-4 flex justify-between items-center">
          <div className="text-base flex gap-6 justify-center items-center">
            <Link to="/home">
              <img
                src={img}
                width={180}
                height={120}
                alt="Clickable Image"
                className="w-36"
              />
            </Link>
          </div>

          <div className="text-base flex gap-6 justify-center items-center">
            <Link
              to="/sobre"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Sobre nós
            </Link>

            <Link
              to="/servicos"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Serviços
            </Link>
            <Link
              to="/cadastrarServico"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Cadastrar Serviços
            </Link>
            <Link
              to="/categorias"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Categoria
            </Link>
            <Link
              to="/cadastrarCategoria"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Cadastrar Categoria
            </Link>
          </div>

          <div className="flex gap-6 justify-end items-center">
            <Link
              to=""
              onClick={logout}
              className="flex text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
            >
              Sair
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    navBarComponent = (
      <nav className="sticky flex justify-center items-center top-0 h-20 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white text-xl">
        <div className="container px-4 flex justify-between items-center">
          <div className="text-base flex gap-6 justify-center items-center">
            <Link to="/home">
              <img
                src={img}
                width={180}
                height={120}
                alt="Clickable Image"
                className="w-36"
              />
            </Link>
            <Link
              to="/"
              className="text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
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
              className=" text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent has-submenu"
            >
              Serviços
            </Link>
          </div>

          <div className="p-2 m-2">
            <div className="flex gap-5 justify-center items-center">
              <Link to="/logar" className="hover:underline">
                <button className="text-sm px-2 py-2 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                  Entrar
                </button>
              </Link>
              <Link to="/cadastrar" className="hover:underline">
                <button className="text-sm px-2 py-2 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                  Cadastrar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  return <>{navBarComponent}</>;
}

export default Navbar;
