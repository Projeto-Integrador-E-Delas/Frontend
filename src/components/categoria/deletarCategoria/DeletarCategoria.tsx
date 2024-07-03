import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'
import Categorias from '../../../models/Categorias'
import { Link } from 'react-router-dom'
import Background from "../../../assets/backgorundCadastro.png";

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categorias>({} as Categorias)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/logar')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function deletarTema() {
        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        }, [])
    
    return (
        <div
      className="container flex flex-col mx-auto items-center bg-white rounded-lg p-10 shadow-custom"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <div className="flex justify-center flex-col w-2/5 gap-3 m-auto bg-white rounded-lg shadow-2xl p-6 ">
        <h1 className="text-2xl font-semibold text-center my-4">
          Tem certeza de que deseja apagar a categoria para sempre?
        </h1>
        <p className="text-xl font-semibold h-full">{categoria.nome}</p>
        <div className="mt-4 flex gap-2 w-full">
          <Link className="w-full" to="/servicos">
          <button
              type="button"
              className="text-white justify-center w-full gap-2 bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300  font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
            >
              Não
            </button>
          </Link>
          <button
              onClick={deletarTema}
              type="button"
              className="text-white justify-center w-full gap-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center"
            >
              Sim
            </button>
        </div>
      </div>
    </div>
    )
}

export default DeletarCategoria
