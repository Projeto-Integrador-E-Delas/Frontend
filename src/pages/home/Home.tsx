import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Card from "../../components/Card/Card";
import Servicos from "../../models/Servicos";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../utils/toastAlerta";
import { buscar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";
const slides = [
  {
    url: "../src/assets/banner1.png",
  },
  {
    url: "../src/assets/banner2.png",
  },
  {
    url: "../src/assets/banner3.png",
  },
  {
    url: "../src/assets/banner4.png",
  },
  {
    url: "../src/assets/banner5.png",
  },
];



function Home() {

  const [servico, setServico] = useState<Servicos[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info');
      navigate('/');
    }
  }, [token]);

  async function buscarServico() {
    try {
      await buscar('/servico', setServico);

      
    } catch (error: any) {
        toastAlerta('Erro desconhecido, tente logar novamente', 'info')
        handleLogout()
    }
  }

  useEffect(() => {
    buscarServico();
  }, [servico.length]);


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
    <>
      <div className="h-full font-poppins">
        
        <div className="w-max-[1400px] w-full h-[500px] relative m-auto">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
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
                  className={`${slideIndex === currentIndex ? "text-white" : "text-gray-500"
                    }`}
                />
              </div>
            ))}
          </div>          
        </div>

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

          <div className="flex justify-center w-full flex-wrap gap-4 p-4">
            {servico.map((servico) => (
              <Card key={servico.id} post={servico} />
            ))}
          </div>
      </div>

    </>
  );
}

export default Home;
