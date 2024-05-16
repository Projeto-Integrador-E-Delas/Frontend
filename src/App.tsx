import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categoria/listaCategoria/ListaCategoria';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import ListaServico from './components/servico/listaServico/ListaServico';
import FormularioServico from './components/servico/formularioServico/FormularioServico';
import DeletarServico from './components/servico/deletarcardServico/DeletarServico';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function App() {

  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/logar" element={<Login />} />
              <Route path="/cadastrar" element={<Cadastro />} />
        
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria/>} />

              <Route path="/servicos" element={<ListaServico />} />
              <Route path="/cadastrarServico" element={<FormularioServico />} />
              <Route path="/editarServico/:id" element={<FormularioServico />} />
              <Route path="/deletarServico/:id" element={<DeletarServico/>} />

            </Routes>
          </div>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
