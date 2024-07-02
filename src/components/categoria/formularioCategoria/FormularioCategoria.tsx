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

  return (
    <div className="container flex flex-col mx-auto items-center bg-white rounded-lg p-20" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}>
    <div className="flex flex-col items-center w-2/4 gap-3 m-auto bg-white bg-opacity-50 rounded shadow-2xl p-14">
      <h1 className="text-4xl text-center my-4">
        {id === undefined ? 'Cadastro de categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col  gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="nome"
            name='nome'
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Foto</label>
          <input
            value={servico.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div> */}

        <div className="flex flex-col gap-2">
          <label htmlFor="icone">Icone da Categoria</label>
          <input
            type="text"
            placeholder="icone"
            name="icone"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.icone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-purple-500 hover:bg-purple-600 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
    </div>
  );
}

export default FormularioCategoria;