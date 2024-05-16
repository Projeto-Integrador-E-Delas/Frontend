import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { toastAlerta } from '../../../utils/toastAlerta';
import CardServico from '../cardServico/CardServico';
import Servicos from '../../../models/Servicos';

function ListaServico() {
  const [servico, setServico] = useState<Servicos[]>([]);


  const { handleLogout } = useContext(AuthContext);

  async function buscarServico() {
    try {
      await buscar('/servico', setServico, {});
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarServico();
  }, [servico.length]);

  return (
    <>
      {servico.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {servico.map((servico) => (
          <CardServico key={servico.id} post={servico} />
        ))}
      </div>
    </>
  );
}

export default ListaServico;