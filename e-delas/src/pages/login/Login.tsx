import React from 'react';
import './Login.css';

function Login() {
  
  return (
    <>
      <div className="flex font-bold w-full h-screen">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4 m-auto h-full" >
          <h2 className="text-slate-900 text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
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
             
            />
          </div>
          <button  type='submit' className="rounded bg-rose-400 hover:bg-rose-700 text-white w-1/2 py-2 flex justify-center">
            <span>Entrar</span>
          </button>

          <hr className="border-slate-800 w-full" />

          <p>
            Ainda não tem uma conta?{' '}
           
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;