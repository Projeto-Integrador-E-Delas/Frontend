import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../utils/toastAlerta";
import Background from "../../assets/backgorundCadastro.png";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    cpf: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/logar");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        toastAlerta("Conta criada com sucesso!", "sucesso");
      } catch (error) {
        toastAlerta("Erro ao cadastrar o Usuário", "erro");
      }
    } else {
      toastAlerta(
        "Sua senha deve conter no minimo 8 digitos!",
        "info"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }
  
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <>
    <div style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
      <div className="flex w-1/2 max-w-2xl mx-auto place-items-center leading-loose " >
        <div className="fundoCadastro hidden lg:block" ></div>

        <form
          className="my-20 flex justify-center flex-col w-2/3 gap-3 m-auto bg-white bg-opacity-50 rounded shadow-2xl p-12"
          onSubmit={cadastrarNovoUsuario} // onSubmit é o evento que dispara a função de cadastro quando o usuário clica em cadastrar
        >
          <h2 className="mb-4 font-medium text-center text-3xl">Cadastrar</h2>
          <div className="mb-3 flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="mb-3 flex flex-col w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Insira seu email"
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg"
              value={usuario.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="mb-3 flex flex-col w-full">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg"
              value={usuario.cpf}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>

          <div className="mb-3 flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar senha"
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            />
          </div>

          <div className="flex justify-around w-full gap-8">
            <button
              className="rounded text-white font-light tracking-wider
                bg-red-600 hover:bg-red-500
                disabled:bg-gray-300 w-1/2 
             py-2 flex justify-center"
              onClick={retornar}
            >
              Cancelar
            </button>

            <button
              className="rounded text-white font-light tracking-wider
                bg-purple-600 hover:bg-purple-500
                disabled:bg-gray-300 w-1/2 
             py-2 flex justify-center"
              type="submit"
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
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Cadastro;
