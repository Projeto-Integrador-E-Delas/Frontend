import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import Categorias from "../../../models/Categorias";
import Servicos from "../../../models/Servicos";
import Background from "../../../assets/backgorundCadastro.png";

function FormularioServico() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const [categoria, setCategoria] = useState<Categorias>({
    id: 0,
    nome: "",
    icone: "",
  });

  const [servico, setServico] = useState<Servicos>({
    login:"",
    id: 0,
    nome: "",
    agendamento: "",
    valor: 0,
    descricao: "",
    foto: "",
    categoria: null,
    usuario: null,
  });

  async function buscarServicoPorId(id: string) {
    await buscar(`/servico/${id}`, setServico, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoria() {
    await buscar("/categoria", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategoria();
    if (id !== undefined) {
      buscarServicoPorId(id);
      console.log(categoria);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/servicos");
  }

  async function gerarNovoServico(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ servico });

    if (id != undefined) {
      try {
        await atualizar(`/servico`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });
        toastAlerta("Serviço atualizado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao atualizar o Serviço", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/servico`, servico, setServico, {
          headers: {
            Authorization: token,
          },
        });

        toastAlerta("Serviço cadastrado com sucesso", "sucesso");
        retornar();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          toastAlerta("O token expirou, favor logar novamente", "info");
          handleLogout();
        } else {
          toastAlerta("Erro ao cadastrar o Serviço", "erro");
        }
      }
    }
  }

  const carregandoCategoria = categoria.nome === "";
  
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <div
      className="container flex flex-col mx-auto items-center bg-white rounded-lg p-10 shadow-custom"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <div className="flex justify-center flex-col w-2/5 gap-3 m-auto bg-white rounded shadow-2xl p-6 ">
        <h1 className="text-2xl font-semibold text-center my-4">
          {id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}
        </h1>

        <form
          onSubmit={gerarNovoServico}
          className="flex-col gap-6 items-center"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Nome do serviço</label>
            <input
              value={servico.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Nome"
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
          <div className="flex flex-col gap-2 ">
            <label htmlFor="titulo">Agendamento</label>
            <input
              value={servico.agendamento}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Agendamento"
              name="agendamento"
              required
              className=" border-2
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
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Valor do serviço (hora)</label>
            <input
              value={servico.valor}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="number"
              placeholder="R$"
              name="valor"
              required
              className=" border-2
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
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Descrição do Serviço</label>
            <input
              value={servico.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Descrição"
              name="descricao"
              required
              className=" border-2
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
          <div className="flex flex-col gap-2">
            <label htmlFor="titulo">Foto</label>
            <input
              value={servico.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
              type="text"
              placeholder="Foto"
              name="foto"
              required
              className=" border-2
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
          <div className="flex flex-col gap-2">
            <p>Categoria do Serviço</p>
            <select
              name="categoria"
              id="categoria"
              className=" border-2
                  hover:border-purple-500
                  focus:border-purple-600
                  border-gray-500
                  disabled:border-gray-300
                  disabled:bg-gray-200
                  rounded-lg
                  mb-4
                "
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled>
                Selecione um categoria
              </option>
              {categorias.map((categoria) => (
                <option value={categoria.id}>{categoria.nome}</option>
              ))}
            </select>
          </div>
          <button
            disabled={carregandoCategoria}
            type="submit"
            className="
              w-full
              mt-3 py-3
              flex items-center justify-center
              text-white font-light tracking-wider
              bg-purple-600 hover:bg-purple-500 rounded
              disabled:bg-gray-300"
          >
            {carregandoCategoria ? (
              <span>Carregando</span>
            ) : id !== undefined ? (
              "Salvar alterações"
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormularioServico;
