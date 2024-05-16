import Servico from "./Servicos";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  foto: string;
  servico?: Servico | null;
}