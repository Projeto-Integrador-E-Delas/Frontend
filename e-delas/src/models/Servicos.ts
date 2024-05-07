import Categorias from "./Categorias";
import Usuario from "./Usuario";

export default interface Servico {
  id: number;
  nome: string;
  agendamendato: string;
  valor: number;
  descricao: string;
  foto: string;
  categoria: Categorias | null;
  usuario: Usuario | null;
}