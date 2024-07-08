import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import Categorias from '../../../models/Categorias';
import Background from "../../../assets/backgorundCadastro.png";

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categorias>({} as Categorias);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })

    console.log(JSON.stringify(categoria))
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria atualizada com sucesso', 'sucesso')
        retornar()

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao atualizar a Categoria', 'erro')
        }

      }

    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: {
            'Authorization': token
          }
        })

        toastAlerta('Categoria cadastrada com sucesso', 'sucesso')

      } catch (error: any) {
        if (error.toString().includes('403')) {
          toastAlerta('O token expirou, favor logar novamente', 'info')
          handleLogout()
        } else {
          toastAlerta('Erro ao cadastrar a categoria', 'erro')
        }
      }
    }

    retornar()
  }

  function retornar() {
    navigate("/categorias")
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/logar');
    }
  }, [token]);

  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <div
      className="flex w-full justify-center py-10 mx-auto place-items-center leading-loose"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <form className="w-full mx-4 lg:w-[800px] flex bg-white flex-col gap-4 max-w-lg p-10 rounded-lg shadow-2xl" onSubmit={gerarNovaCategoria}>
          <h2 className="font-bold text-3xl">{id !== undefined ? "Editar categoria" : "Cadastrar categoria"}</h2>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo">Nome da categoria</label>
            <input
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Saúde e bem-estar"
              name="nome"
              required
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg
                  mb-4
                "
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="titulo">URL do ícone</label>
            <input
              value={categoria.icone}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Insira a URL"
              name="Icone"
              required
              className="border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg
                  mb-4
                "
            />
          </div>
        <button
          className="
            w-full
            mt-3 py-3
            flex items-center justify-center
            text-white font-light tracking-wider
            bg-purple-600 hover:bg-purple-500 rounded-lg
            disabled:bg-gray-300
          "
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;