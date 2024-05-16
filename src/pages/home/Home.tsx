import { useState } from "react";
import "./Home.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import imgexemple from "../../assets/woman.jpg";
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
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="h-screen font-poppins">
        <div className="w-max-[1400px] w-4/6 h-[400px] relative m-auto">
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
          <div className="flex justify-around">
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          <img className="rounded-full w-24 h-24" src={imgexemple} alt="image"></img>
          </div>


        </div>
      </div>
    </>
  );
}

export default Home;
