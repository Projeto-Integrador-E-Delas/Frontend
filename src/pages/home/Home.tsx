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
  { url: "src/assets/banner1.gif" },
  { url: "src/assets/banner2.gif" },
  { url: "src/assets/banner3.gif" },
  { url: "src/assets/banner4.gif" },
  { url: "src/assets/banner5.gif" },
  { url: "src/assets/banner6.gif" },
  { url: "src/assets/banner7.gif" },
];

function Home() {
  const [servico, setServico] = useState<Servicos[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  let navigate = useNavigate();
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
    <div className="h-full font-poppins">
      <div className="w-max-[1400px] w-full h-[700px] relative m-aut mt-4">
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
                className={`${
                  slideIndex === currentIndex ? "text-white" : "text-gray-500"
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
  );
}

export default Home;
