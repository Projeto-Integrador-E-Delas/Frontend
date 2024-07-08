import { useEffect } from "react";
import img from "../../assets/woman.jpg";

function Sobre() {

  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <>
      <div className="container my-10 mx-auto md:px-6">
        <section className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 className="mb-8 text-3xl font-bold text-purple-800">E-Delas</h2>

                <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Independêcia
                  </p>

                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Autonomia
                  </p>

                  <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Empreendedorismo
                  </p>
                </div>

                <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                  Nossa empresa surgiu como um marketplace inspirado nos Objetivos de Desenvolvimento Sustentável da ONU. 
                  Nosso principal objetivo é proporcionar um ambiente seguro e inclusivo onde as mulheres possam anunciar e 
                  ganhar visibilidade para seus produtos. Temos como intuito reunir, em uma só plataforma, mulheres autônomas 
                  que desejam promover e vender seus empreendimentos, proporcionando-lhes maior visibilidade no mercado. 
                  Dessa forma, possibilitamos que elas alcancem novas oportunidades e recomecem suas vidas de maneira independente e empoderada. 
                  Acreditamos no poder do empreendedorismo feminino para promover igualdade de gênero e desenvolvimento econômico sustentável.
                </p>
              </div>
            </div>

            <div>
              <img
                src={img}
                className="w-3/4 rounded-lg shadow-lg dark:shadow-black/20"
                alt="image"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Sobre;