import { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import Categorias from '../../../models/Categorias';
import CardCategoria from '../cardCategoria/CardCategoria';
import { ServiceSkeletons } from '../../servico/listaServico/Skeletons';
import { CategorySkeletons } from './Skeletons';

function ListaCategoria() {
  const [categoria, setCategoria] = useState<Categorias[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if(error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/logar');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);

  const showSkeletons = categoria.length === 0
  
  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <div className='container mx-auto py-10 px-20'>
      <CategorySkeletons isVisible={showSkeletons} />
      <div className="flex flex-col gap-10">
        {categoria.length > 0 && (
          <h1 className="font-semibold text-xl">
            {categoria.length} Categorias cadastradas
          </h1>
        )}
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categoria.map((categoria) => (
            <CardCategoria key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategoria;