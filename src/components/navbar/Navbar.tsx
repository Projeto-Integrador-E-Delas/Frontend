import { Link, useNavigate } from "react-router-dom";
import img from "/src/assets/2.svg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {

  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', "sucesso")
    navigate('/logar')
  }


  let navBarComponent

  if (usuario.token !== "") {
    navBarComponent = (
      <nav className="sticky top-0 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white flex justify-center py-6 text-xl">
        <div className="container flex justify-between items-start">
          <div className="img">
            <Link to="/home">
              <img src={img} width={180} height={120} alt="Clickable Image" />
            </Link>
          </div>

          <div className="mt-5 flex gap-6 justify-center items-center w-full">
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
            <Link
              to="/cadastrarServico"
              className=" text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent sub-menu"
            >
              Cadastrar Serviços
            </Link>
            <Link
              to="/categorias"
              className="sub-menu text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen"
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

          <div className="flex gap-6 justify-center items-center mt-4">
            <Link to="/logar" className="hover:underline">
              <button className="px-4 py-1 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                Entrar
              </button>
            </Link>
            <Link
              to="" onClick={logout} className="flex text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparen">
              Sair
            </Link>
          </div>
        </div>
      </nav>
    )
  } else {
    navBarComponent = (
      <nav className="sticky top-0 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white flex justify-center py-6 text-xl">
        <div className="container flex justify-between items-start">
          <div className="img">
            <Link to="/home">
              <img src={img} width={180} height={120} alt="Clickable Image" />
            </Link>
          </div>

          <div className="mt-5 flex gap-6 justify-center items-center w-full">
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

          <div className="flex gap-6 justify-center items-center mt-4">
            <Link to="/logar" className="hover:underline">
              <button className="px-4 py-1 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                Entrar
              </button>
            </Link>

          </div>
        </div>
      </nav>
    )

  }
  return (
    <>

      {navBarComponent}

    </>
  );
}

export default Navbar;
