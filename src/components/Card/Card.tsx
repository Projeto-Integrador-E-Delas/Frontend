import React from 'react'
import Servicos from '../../models/Servicos'

interface CardServicoProps {
    post: Servicos
  }

const Card = ({post}: CardServicoProps) => {
  return (
        <div className=" bg-white rounded-lg w-80 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" className="h-64 ml-auto mr-auto" />
        </figure>
        <div className="rounded-lg p-4 bg-purple-700 flex flex-col">
          <div>
            <h5 className="text-white text-2xl font-bold leading-none">
              {post.nome}
            </h5>
            <span className="text-xs text-gray-400 leading-none">{post.descricao}</span>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-white font-light">
              {post.valor}
            </div>
           
          </div>
        </div>
        </div>
  )
}

export default Card
