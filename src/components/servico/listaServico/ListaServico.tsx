import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardServico from '../cardServico/CardServico';
import Servicos from '../../../models/Servicos';
import Skeleton from 'react-loading-skeleton';
import { ServiceSkeletons } from './Skeletons';

function ListaServico() {
  const [servico, setServico] = useState<Servicos[]>([]);


  const { handleLogout } = useContext(AuthContext);

  const buscarServico = useCallback(async () => {
    try {
      setTimeout(async () => {
        await buscar('/servico', setServico, {});
      }, 2000)
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }, [handleLogout]);

  useEffect(() => {
    buscarServico()
  }, [servico, buscarServico]);

  const showSkeletons = servico.length === 0

  return (
    <>
      <ServiceSkeletons isVisible={showSkeletons} />
      <div className="my-14 container md:px-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {servico.map((servico) => (
          <CardServico key={servico.id} post={servico} />
        ))}
      </div>
    </>
  );
}

export default ListaServico;