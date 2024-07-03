import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import loginImage from "../../assets/loginImage.png";

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
      navigate("/servicos");
    }
  }, [usuario, navigate]);

  
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <div className="p-14 w-full container mx-auto flex items-center justify-center">
      <div className="flex items-center justify-between gap-20 flex-wrap lg:flex-nowrap w-full">
        <div className="justify-center hidden lg:flex">
          <img src={loginImage} className="w-2/3" alt="Sample image" />
        </div>
        <form
            className="w-full lg:w-[800px] flex flex-col gap-4 max-w-lg p-10 rounded-lg shadow-2xl"
            onSubmit={login}
          >
            <p className="font-bold text-3xl">Olá novamente! 😄</p>
            <div className="flex gap-3">
              <p className="text-gray-500">Ainda não tem uma conta? </p>
              <Link
                to="/cadastrar"
                className="text-purple-800 hover:underline font-bold"
              >
                Crie sua conta grátis
              </Link>
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1" htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Insira seu email"
                disabled={isLoading}
                className="
                  border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg
                "
                value={usuarioLogin.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1" htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Insira sua senha"
                disabled={isLoading}
                className="
                  border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg
                "
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="
                mt-3 py-3
                flex items-center justify-center
                text-white font-light tracking-wider
                bg-purple-600 hover:bg-purple-500 rounded
                disabled:bg-gray-300">
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span className="font-semibold">Entrar</span>
              )}
            </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
