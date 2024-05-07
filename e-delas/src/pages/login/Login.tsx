import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {

  const { handleLogin, usuario, isLoading } = useContext(AuthContext)
  const navigate = useNavigate();
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/home')
    }
  }, [usuario])

  return (
    <>
      <div className="h-screen font-sans login bg-cover">
        <div className="container mx-auto h-full flex flex-1 justify-center items-center ">
          <div className="w-full max-w-2xl max-h-2xl">
            <div className="leading-loose h-full">
              <form className="max-w-2xl h-sm m-4 p-10 bg-white bg-opacity-50 rounded shadow-xl " onSubmit={login}>
              <p className="font-medium text-center text-2xl font-bold">LOGIN</p>
                <div className="flex flex-col w-full">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="border-2 border-slate-700 rounded p-2"
                    value={usuarioLogin.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="border-2 border-slate-700 rounded p-2"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                  />
                </div>


                <div className="mt-4 items-center flex justify-between">
                <button type='submit' className="px-4 py-1 text-white font-light tracking-wider bg-purple-800 hover:bg-purple-600 rounded">
                  {
                    isLoading ? <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    /> :
                      <span>Entrar</span>}
                </button>

                  <Link className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-purple-600 text-purple-800" to="/usuarios/cadastrar">Cadastre-se</Link>
                </div>
              </form>
              </div>
            </div>
            </div>
            </div>
          </>
          );
}

          export default Login;