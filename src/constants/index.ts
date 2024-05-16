import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  import SpaceCity1 from "../assets/banner1.png";
  import SpaceCity5 from "../assets/banner2.png";
  import SpaceCity6 from "../assets/banner3.png";
  import SpaceCity7 from "../assets/banner4.png";
  import SpaceCity8 from "../assets/banner5.png";
  import SpaceCity9 from "../assets/banner6.png";
  
  interface Service {
    icon: React.ComponentType<any>;
    title: string;
    content: string;
    backgroundImage: string;
  }
  
  export const ServiceData: Service[] = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Guarda corpo com travessas em aço inox",
      backgroundImage: SpaceCity9,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Guarda corpo com travessas em aço inox",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Guarda corpo com travessas em aço inox",
      backgroundImage: SpaceCity6,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Guarda corpo com travessas em aço inox",
      backgroundImage: SpaceCity7,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Guarda corpo com travessas em aço inox",
      backgroundImage: SpaceCity5,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Guarda corpo com travessas em aço inox",
      backgroundImage: SpaceCity8,
    },
  ];
  