import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../utils/toastAlerta";
import CardServico from "../cardServico/CardServico";
import Servicos from "../../../models/Servicos";
import Background from "../../../assets/backgroundListaServicos.png";
import CardServicoSemLogin from "../cardServico/CardServicoSemLogin";
import { ServiceSkeletons } from "./Skeletons";

function ListaServico() {
  const [servico, setServico] = useState<Servicos[]>([]);

  const { handleLogout, usuario } = useContext(AuthContext);

  const buscarServico = useCallback(async () => {
    try {
      setTimeout(async () => {
        await buscar("/servico", setServico, {});
      }, 2000);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        toastAlerta("O token expirou, favor logar novamente", "info");
        handleLogout();
      }
    }
  }, [handleLogout]);

  useEffect(() => {
    buscarServico();
  }, [servico, buscarServico]);

  const showSkeletons = servico.length === 0;

  let cardComponent;

  if (usuario.token !== "") {
    cardComponent = (
      <div className="flex flex-col gap-10">
        {servico.length > 0 && (
          <h1 className="font-semibold text-xl">
            {servico.length} Serviços cadastrados
          </h1>
        )}
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servico.map((servico) => (
            <CardServico key={servico.id} post={servico} />
          ))}
        </div>
      </div>
    );
  } else {
    cardComponent = (
      <div className="flex flex-col gap-10">
        {servico.length > 0 && (
          <h1 className="font-semibold text-xl">
            {servico.length} Serviços disponíveis
          </h1>
        )}
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servico.map((servico) => (
            <CardServicoSemLogin key={servico.id} post={servico} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
        }}
      >
        <ServiceSkeletons isVisible={showSkeletons} />
        <div
          className="container mx-auto py-10 px-20"
        >
          {cardComponent}
        </div>
      </div>
    </>
  );
}

export default ListaServico;
