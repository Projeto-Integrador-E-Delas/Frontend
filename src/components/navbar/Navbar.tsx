import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";
import img from "/src/assets/logo.svg";
import FeatherIcon from "feather-icons-react";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  function logout() {
    handleLogout();
    toastAlerta("Até mais!", "sucesso");
    navigate("/logar");
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  let navBarComponent;
  const userIsAuthenticated = usuario.token !== "";

  if (userIsAuthenticated) {
    navBarComponent = (
      <nav className="sticky flex items-center top-0 h-20 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white text-xl">
        <div className="container px-4 flex justify-between items-center">
          <div className="text-base flex gap-6 justify-center items-center">
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <FeatherIcon icon="x-circle" size={24} />
                ) : (
                  <FeatherIcon icon="menu" size={24} />
                )}
              </button>
            </div>
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
          <div className="hidden md:flex text-base gap-6 justify-center items-center">
            <Link to="/sobre" className="text-white hover:text-gray-300">
              Sobre nós
            </Link>
            <Link to="/servicos" className="text-white hover:text-gray-300">
              Serviços
            </Link>
            <Link
              to="/cadastrarServico"
              className="text-white hover:text-gray-300"
            >
              Cadastrar serviços
            </Link>
            <Link to="/categorias" className="text-white hover:text-gray-300">
              Categoria
            </Link>
            <Link
              to="/cadastrarCategoria"
              className="text-white hover:text-gray-300"
            >
              Cadastrar sua categoria
            </Link>
          </div>
          <div className="hidden md:flex gap-6 justify-end items-center">
            <Link
              to=""
              onClick={logout}
              className="text-white hover:text-gray-300"
            >
              Sair
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div
            className="
            md:hidden fixed top-0 left-0 flex flex-col bg-gradient-to-r 
            from-purple-900 via-purple-600 to-purple-400 w-screen h-screen
          "
          >
            <div className="flex h-20 top-4 items-center">
              <button onClick={toggleMenu} className="ml-4">
                <FeatherIcon icon="x-circle" size={24} />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-2">
              <Link
                to="/sobre"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Sobre nós
              </Link>
              <Link
                to="/servicos"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                to="/cadastrarServico"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Cadastrar serviços
              </Link>
              <Link
                to="/categorias"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Categoria
              </Link>
              <Link
                to="/cadastrarCategoria"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Cadastrar sua categoria
              </Link>
              <Link
                to=""
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="text-white py-2"
              >
                Sair
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  } else {
    navBarComponent = (
      <nav className="sticky flex items-center top-0 h-20 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-white text-xl">
        <div className="container px-4 flex justify-between items-center">
          <div className="text-base flex gap-6 justify-center items-center">
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <FeatherIcon icon="x-circle" size={24} />
                ) : (
                  <FeatherIcon icon="menu" size={24} />
                )}
              </button>
            </div>
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
          <div className="hidden md:flex text-base gap-6 justify-center items-center">
            <Link to="/" className="text-white hover:text-gray-300">
              Inicio
            </Link>
            <Link to="/sobre" className="text-white hover:text-gray-300">
              Sobre nós
            </Link>
            <Link to="/servicos" className="text-white hover:text-gray-300">
              Serviços
            </Link>
          </div>
          <div className="hidden md:flex gap-6 justify-end items-center">
            <Link to="/logar" className="text-white hover:underline">
              <button className="text-sm px-2 py-2 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded-lg">
                Entrar
              </button>
            </Link>
            <Link to="/cadastrar" className="text-white hover:underline">
              <button className="text-sm px-2 py-2 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded-lg">
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div
            className="
            md:hidden fixed top-0 left-0 flex flex-col bg-gradient-to-r 
            from-purple-900 via-purple-600 to-purple-400 w-screen h-screen
          "
          >
            <div className="flex h-20 top-4 items-center">
              <button onClick={toggleMenu} className="ml-4">
                <FeatherIcon icon="x-circle" size={24} />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-2">
              <Link to="/" className="text-white py-2" onClick={toggleMenu}>
                Inicio
              </Link>
              <Link
                to="/sobre"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Sobre nós
              </Link>
              <Link
                to="/servicos"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                to="/logar"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Entrar
              </Link>
              <Link
                to="/cadastrar"
                className="text-white py-2"
                onClick={toggleMenu}
              >
                Cadastrar
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }

  return <>{navBarComponent}</>;
}

export default Navbar;
