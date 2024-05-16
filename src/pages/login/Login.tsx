import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import loginImage from "../../assets/loginImage.jpg";

function Login() {
  const { handleLogin, usuario, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  return (
    <div className="min-h-screen font-sans login bg-cover flex items-center justify-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-wrap lg:flex-nowrap w-full max-w-6xl rounded overflow-hidden">
          <div className="hidden lg:flex lg:w-1/2">          
          </div>
          <div className="w-full lg:w-1/2 p-10 flex justify-center items-center bg-white bg-opacity-90">
            <div className="leading-loose w-full">
              <form
                className="max-w-lg w-full p-10 bg-white rounded shadow-2xl"
                onSubmit={login}
              >
                <p className="mb-4 font-medium text-left text-3xl">Entrar</p>
                <div className="mb-3 flex flex-col w-full">
                  <label htmlFor="email" className="mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border-2 border-slate-700 rounded p-2"
                    value={usuarioLogin.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>
                <div className="mb-3 flex flex-col w-full">
                  <label htmlFor="senha" className="mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="border-2 border-slate-700 rounded p-2"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white font-light tracking-wider bg-purple-800 hover:bg-purple-600 rounded"
                  >
                    {isLoading ? (
                      <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                      />
                    ) : (
                      <span>Entrar</span>
                    )}
                  </button>

                  <hr className="border-slate-800 w-full" />

                  <p>
                    Ainda não tem uma conta?{" "}
                    <Link
                      to="/cadastrar"
                      className="text-purple-800 hover:underline"
                    >
                      Cadastre-se
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
