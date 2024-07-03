import Categorias from "./Categorias";
import Usuario from "./Usuario";

export default interface Servicos {
  login: any;
  id: number;
  nome: string;
  agendamento: string;
  valor: number;
  descricao: string;
  foto: string;
  categoria: Categorias | null;
  usuario: Usuario | null;
}