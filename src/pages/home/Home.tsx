import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Servicos from "../../models/Servicos";
import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../utils/toastAlerta";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";

import img1 from '../../assets/banner1.gif'
import img2 from '../../assets/banner2.gif'
import img3 from '../../assets/banner3.gif'
import img4 from '../../assets/banner4.gif'
import img5 from '../../assets/banner5.gif'
import img6 from '../../assets/banner6.gif'
import img7 from '../../assets/banner7.gif'
import ListaServico from "../../components/servico/listaServico/ListaServico";

const slides = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
  { url: img4 },
  { url: img5 },
  { url: img6 },
  { url: img7 },
];

function Home() {
  const [servico, setServico] = useState<Servicos[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {handleLogout } = useContext(AuthContext);
  // const token = usuario.token;

  // useEffect(() => {
  //   if (token === '') {
  //     toastAlerta('Você precisa estar logado', 'info');
  //     navigate('/');
  //   }
  // }, [token, navigate]);

  async function buscarServico() {
    try {
      await buscar('/servico', setServico);
    } catch (error: any) {
      toastAlerta('Erro desconhecido, tente logar novamente', 'info');
      handleLogout();
    }
  }

  useEffect(() => {
    buscarServico();
  }, [servico.length]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container mx-auto font-poppins">
      <div className="w-max-[1400px] w-full h-[500px] relative m-aut">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>

        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled
                className={`${
                  slideIndex === currentIndex ? "text-white" : "text-gray-500"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <ListaServico />
    </div>
  );
}

export default Home;
