import { Link } from "react-router-dom";
import img from "/src/assets/2.svg";

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-10 shadow-lg font-poppins w-full bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg items-center">
          <div className="img">
            <img src={img} width={120} height={120} />
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/home" className="hover:underline">
              Inicio
            </Link>
            <Link to="/sobre" className="hover:underline">
              Sobre nós
            </Link>
            <Link to="/categoria" className="hover:underline">
              Categoria
            </Link>
            <Link to="/cadastrarCategoria" className="hover:underline">
              Cadastrar Categoria
            </Link>
            <Link to="/logar" className="hover:underline">
              <button className="px-4 py-1 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                Entrar
              </button>
            </Link>
            <Link to="/cadastrar" className="hover:underline">
              <button className="px-4 py-1 text-purple-800 font-light tracking-wider bg-white hover:bg-gray-100 rounded">
                Cadastrar
              </button>
            </Link>
            <Link to="/" className="hover:underline">
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
