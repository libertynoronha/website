import { Room, Amenity, Testimonial, FAQItem } from "./types";

export const POUSADA_INFO = {
  name: "Pousada Liberty Noronha Sueste",
  tagline: "Experiências inesquecíveis começam com uma hospedagem acolhedora em Noronha",
  description: "Na Pousada Liberty Noronha Sueste, cada detalhe foi pensado para proporcionar uma hospedagem confortável e autêntica. Com suítes aconchegantes, piscina, café da manhã e atendimento acolhedor, somos o ponto de partida ideal para viver toda a beleza e a tranquilidade de Fernando de Noronha, a poucos passos da Praia do Sueste.",
  phone: "+55 (81) 99650-6307",
  phoneNumeric: "5581996506307",
  email: "libertynoronhasueste@gmail.com.br",
  address: "Estrada do Sueste, s/n, Fernando de Noronha - PE, Brasil",
  cep: "53990-000",
  instagram: "https://instagram.com/libertynoronhasueste",
  facebook: "https://www.facebook.com/p/Pousada-Liberty-Noronha-Sueste-100057152842665/",
  tripadvisor: "https://www.tripadvisor.com/Hotel_Review-g616328-d34169349-Reviews-Pousada_Liberty_Noronha-Fernando_de_Noronha_State_of_Pernambuco.html",
  checkInTime: "14:00",
  checkOutTime: "12:00",
};

export const ROOMS_DATA: Room[] = [
  {
    id: "suite-double",
    name: "Suíte Dupla",
    description: "Suíte confortável com opção de cama king-size ou duas camas de solteiro, equipada com TV, frigobar e tudo o que você precisa para uma estadia agradável.",
    longDescription: "Ideal para casais ou amigos, nossa Suíte Dupla oferece um ambiente aconchegante e funcional, com opção de uma cama king-size ou duas camas de solteiro. Equipada com TV, frigobar e uma decoração acolhedora, é perfeita para descansar após um dia explorando Fernando de Noronha, proporcionando conforto e praticidade durante toda a hospedagem.",
    pricePerNight: 597,
    capacity: 2,
    beds: "1 Cama de Casal King Size ou 2 camas de solteiro",
    size: "9 m²",
    view: "Jardim",
    amenities: ["Ar-condicionado Split", "Cama King Size ou solteiros", "Wi-Fi Starlink", "Smart TV 32\"", "Frigobar", "Secador de Cabelo", "Armário", "Chuveiro com Aquecimento Solar", "Roupões de Banho"],
    imageUrl: "assets/images/suite_double.jpg",
    images: [
      "assets/images/suite_double.jpg",
      "assets/images/suite_double_2.jpg",
      "assets/images/suite_double_3.jpg"
    ],
    tag: "Mais Reservada",
  },
  {
    id: "suite-friends",
    name: "Suíte Tripla",
    description: "Suíte ampla e confortável para até 3 hóspedes, equipada com TV, frigobar e ambiente acolhedor para uma estadia tranquila.",
    longDescription: "Perfeita para famílias pequenas ou grupos de amigos, a Suíte Tripla combina espaço, conforto e praticidade. Com acomodações para até três pessoas, TV e frigobar, oferece um ambiente agradável para relaxar após um dia de passeios. Seu layout foi pensado para proporcionar bem-estar e uma experiência de hospedagem confortável.",
    pricePerNight: 657,
    capacity: 3,
    beds: "1 Cama Queen Size + 1 Cama de Solteiro",
    size: "11 m²",
    view: "Jardim e Piscina",
    amenities: ["Ar-condicionado Split", "Cama King Size ou solteiros", "Wi-Fi Starlink", "Smart TV 32\"", "Frigobar", "Secador de Cabelo", "Armário", "Chuveiro com Aquecimento Solar", "Roupões de Banho"],
    imageUrl: "assets/images/suite_triple.jpg",
    images: [
      "assets/images/suite_triple.jpg",
      "assets/images/suite_triple_2.jpg",
      "assets/images/suite_triple_3.jpg"
    ],
    tag: "Amigos",
  },
  {
    id: "suite-family",
    name: "Suíte Família",
    description: "Suíte espaçosa para até 4 hóspedes, com TV, frigobar e todo o conforto para famílias e grupos.",
    longDescription: "Nossa Suíte Quádrupla é ideal para famílias ou grupos de amigos que desejam compartilhar momentos especiais com conforto. Com capacidade para até quatro hóspedes, dispõe de TV, frigobar e um ambiente amplo e acolhedor, garantindo praticidade e uma estadia agradável em um espaço pensado para o descanso e a convivência.",
    pricePerNight: 757,
    capacity: 4,
    beds: "2 Cama Queen Size",
    size: "15 m²",
    view: "Piscina e Jardim",
    amenities: ["Ar-condicionado Split", "Cama King Size ou solteiros", "Wi-Fi Starlink", "Smart TV 32\"", "Frigobar", "Armário", "Secador de Cabelo", "Roupões de Banho", "Chuveiro com Aquecimento Solar"],
    imageUrl: "assets/images/suite_quadruple.jpg",
    images: [
      "assets/images/suite_quadruple.jpg",
      "assets/images/suite_quadruple_2.jpg",
      "assets/images/suite_quadruple_3.jpg"
    ],
    tag: "Espaçosa",
  }
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "wifi",
    name: "Wi-Fi de Alta Velocidade",
    description: "Internet da Starlink cobrindo todas as suítes e áreas externas, ideal para home-office pé na areia.",
    iconName: "Wifi",
  },
  {
    id: "breakfast",
    name: "Café da Manhã Incluso",
    description: "Servido de forma artesanal com pães caseiros, frutas da estação, sucos naturais e tapiocas feitas na hora.",
    iconName: "Coffee",
  },
  {
    id: "pool",
    name: "Piscinas adulto e infantil",
    description: "Duas piscinas com vista direta para a montanha, cercada por deck de madeira nobre e espreguiçadeiras.",
    iconName: "Waves",
  },
  {
    id: "parking",
    name: "Estacionamento",
    description: "Estacionamento na frente da pousada e gratuito para todos os hóspedes.",
    iconName: "ShieldCheck",
  },
  {
    id: "concierge",
    name: "Apoio a Passeios",
    description: "Parcerias com os melhores guias e experiências em Noronha, com acesso a passeios de lancha, trilhas guiadas, aulas de surf e dicas exclusivas da gastronomia local.",
    iconName: "Compass",
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    author: "Melissa Barreto",
    city: "São Paulo - SP",
    rating: 5,
    text: "A pousada é uma delícia, área externa muito gostosa e quartos super confortáveis! Além disso, todos os funcionários são muito queridos.",
    date: "Maio de 2026",
  },
  {
    id: "2",
    author: "Antonia Leonete",
    city: "Góias - GO",
    rating: 5,
    text: "Minha estadia na pousada foi super confortável a Katia, Maria, Gil e Jonas foram sempre muito atenciosos, prestativos. O cafe da manhã sempre fazendo o que a gente desejava deixando vontade de voltar e com certeza indicarei para meus amigos, família e clientes de Goiânia. E acima de tudo, são muito honestos e cuidadosos.",
    date: "Maio de 2026",
  },
  {
    id: "3",
    author: "Gracie Fernanda",
    city: "São Paulo - SP",
    rating: 5,
    text: "Quem faz a Pousada Liberty são os colaboradores, todos extremamente prestativos, atenciosos, simpáticos, alegres...o café da manhã sempre uma delícia com omeletes e tapiocas quentinhos e fresquinhos.. Cama super confortável e grande. Minha pequena amou a piscina e os gatinhos. Até eles são simpáticos. Um agradecimento super especial para a Gi, Katia, Maria e Jonas. Fica próximo ao aeroporto e a praia do Sueste. Tem ponto de ônibus que para quase em frente.",
    date: "Maio de 2026",
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Quais são os horários de check-in e check-out?",
    answer: "Nosso check-in inicia-se a partir das 14:00 e o check-out deve ser realizado até as 12:00. Caso necessite de early check-in ou late check-out, por favor nos consulte previamente para checar a disponibilidade e taxas adicionais.",
  },
  {
    id: "faq-2",
    question: "A pousada aceita animais de estimação (Pet Friendly)?",
    answer: "Aceitamos animais de pequeno porte (até 10kg) mediante consulta prévia e aceitação do regulamento pet. Cobramos uma taxa de higienização única de R$ 120 por estadia. Os pets não devem ser deixados sozinhos nos quartos e não são permitidos na área da piscina por razões sanitárias.",
  },
  {
    id: "faq-3",
    question: "O café da manhã está incluído na diária?",
    answer: "Sim, nosso café da manhã artesanal e buffet de frios e frutas está totalmente incluso em todas as diárias. Ele é servido diariamente das 8:00 às 11:00 em nosso salão aberto com vista para o jardim mar.",
  },
  {
    id: "faq-4",
    question: "Como funciona a política de cancelamento?",
    answer: "Cancelamentos realizados com até 45 dias de antecedência da data de check-in dão direito ao reembolso integral do sinal ou crédito para futuras estadias. Cancelamentos com menos de 45 dias ou não comparecimento (no-show) acarretam na perda integral do valor depositado.",
  },
  {
    id: "faq-5",
    question: "Vocês oferecem serviço de transfer ou passeios?",
    answer: "Não possuímos serviço de transfer próprio, mas temos parceria com motoristas credenciados de confiança e locadoras. Também auxiliamos no agendamento de passeios e guias.",
  }
];

export const LOCAL_ACTIVITIES = [
  {
    title: "Passeio de Caiaque ao Pôr do Sol",
    description: "Aluguel direto na pousada para explorar a baía calma e assistir ao pôr do sol do mar.",
  },
  {
    title: "Trilha da Cachoeira Escondida",
    description: "Uma caminhada leve de 30 minutos em mata preservada que termina em uma linda queda d'água cristalina.",
  },
  {
    title: "Tour Gastronômico Histórico",
    description: "Dicas dos melhores bistrôs caiçaras e restaurantes de frutos do mar no centrinho da cidade.",
  }
];
