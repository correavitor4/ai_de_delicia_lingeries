export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'conjuntos' | 'bodys' | 'robes' | 'noivas' | 'sensual';
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating: number;
  reviewsCount: number;
  sizes: string[];
  colors: { name: string; hex: string }[];
  description: string;
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'conjunto-scarlet-passion',
    name: 'Conjunto Scarlet Passion',
    tagline: 'Renda chantilly francesa com fechos dourados e strappy acetinado',
    category: 'conjuntos',
    price: 159.90,
    originalPrice: 199.90,
    image: '/images/conjunto_scarlet.jpg',
    badge: 'Mais Vendido ⭐',
    rating: 4.9,
    reviewsCount: 142,
    sizes: ['P (38-40)', 'M (42)', 'G (44)', 'GG (46)'],
    colors: [
      { name: 'Vermelho Ruby & Preto', hex: '#990026' },
      { name: 'Preto Noir', hex: '#111111' },
      { name: 'Vinho Cabernet', hex: '#58111a' }
    ],
    description: 'Desenvolvido para momentos inesquecíveis. O Conjunto Scarlet Passion combina a nobreza da renda floral com acabamentos em banho ouro e tiras de cetim ultra macio que abraçam as curvas femininas com sensualidade e conforto supremo.',
    details: [
      'Bojo estruturado com aro reforçado para sustentação perfeita',
      'Calcinha com laterais duplas reguláveis e forro 100% algodão',
      'Metais com banho antialérgico de alta durabilidade',
      'Tecido com toque aveludado e elasticidade inteligente'
    ]
  },
  {
    id: 'body-noir-strappy',
    name: 'Body Rendado Noir Strappy',
    tagline: 'Decote geométrico cage com renda bordada e transparência elegante',
    category: 'bodys',
    price: 189.90,
    originalPrice: 229.90,
    image: '/images/body_noir.jpg',
    badge: 'Edição Limitada ✨',
    rating: 5.0,
    reviewsCount: 98,
    sizes: ['P (38-40)', 'M (42)', 'G (44)', 'GG (46)'],
    colors: [
      { name: 'Preto Noir Absoluto', hex: '#0e0e0e' },
      { name: 'Bordô Imperial', hex: '#4d0b1a' }
    ],
    description: 'A peça que transita do íntimo provocante ao look outwear com facilidade e sofisticação. Com decote bondage estilizado e recortes que afinam a silhueta, o Body Noir é pura ousadia e poder.',
    details: [
      'Fecho entrepernas prático com 2 níveis de ajuste',
      'Decote strappy geométrico desenhado para valorizar o colo',
      'Pode ser usado em noites especiais ou compondo looks com alfaiataria',
      'Renda elástica premium que não desbota e não pinica'
    ]
  },
  {
    id: 'robe-cetim-bordo',
    name: 'Robe de Seda & Cetim Sublime',
    tagline: 'Caimento fluido com mangas amplas em renda guipir trabalhada',
    category: 'robes',
    price: 179.90,
    originalPrice: 219.90,
    image: '/images/robe_luxo.jpg',
    badge: 'Toque de Luxo 💎',
    rating: 4.9,
    reviewsCount: 87,
    sizes: ['P/M', 'G/GG'],
    colors: [
      { name: 'Vinho Bordô Profundo', hex: '#500b1b' },
      { name: 'Preto Cetim', hex: '#1c1c1c' },
      { name: 'Pérola Champagne', hex: '#f7eee4' }
    ],
    description: 'Envolva-se no conforto e no brilho sutil do nosso cetim nobre com toque de seda. Perfeito para rituais de autocuidado, noites especiais ou para presentear quem você mais ama.',
    details: [
      'Acompanha faixa em cetim largo para amarração na cintura',
      'Punhos amplos com acabamento minucioso em renda de alta gramatura',
      'Comprimento elegante e modelagem solta com caimento impecável',
      'Não amassa facilmente e possui secagem rápida'
    ]
  },
  {
    id: 'conjunto-noiva-perola',
    name: 'Conjunto Noiva Luxo Pérola',
    tagline: 'Cinta-liga delicada com laços de organza e renda off-white romântica',
    category: 'noivas',
    price: 219.90,
    originalPrice: 269.90,
    image: '/images/conjunto_noiva.jpg',
    badge: 'Linha Noivas 💍',
    rating: 5.0,
    reviewsCount: 64,
    sizes: ['P (38-40)', 'M (42)', 'G (44)', 'GG (46)'],
    colors: [
      { name: 'Branco Pérola / Off-White', hex: '#faf7f2' }
    ],
    description: 'Especialmente criada para a noite de núpcias, lua de mel ou ensaios boudoir. Peça que une a pureza do off-white ao erotismo sutil da transparência e da cinta-liga em organza de seda.',
    details: [
      'Acompanha sutiã, calcinha fio duplo e cinta-liga com regulagem',
      'Detalhes em micro-pérolas e fitas de organza removíveis',
      'Forro 100% hipoalergênico e renda macia de alto padrão',
      'Embalagem especial perfumada pronta para presentear'
    ]
  },
  {
    id: 'elixir-vela-sensual',
    name: 'Kit Sensualité: Vela & Óleo Beijável',
    tagline: 'Aromaterapia afrodisíaca com vela hidratante de massagem e elixir beijável',
    category: 'sensual',
    price: 89.90,
    originalPrice: 119.90,
    image: '/images/elixir_sensual.jpg',
    badge: 'Experiência Completa 🔥',
    rating: 4.8,
    reviewsCount: 115,
    sizes: ['Tamanho Único'],
    colors: [
      { name: 'Frutas Vermelhas & Champagne', hex: '#8b0021' },
      { name: 'Baunilha Bourbon & Canela', hex: '#c57d34' }
    ],
    description: 'Transforme o ambiente em uma atmosfera inesquecível. Vela com cera de soja e manteiga de karité que derrete na temperatura corporal perfeita para massagens envolventes, acompanhada de elixir beijável.',
    details: [
      'Vela com pavio de madeira ecológica e queima limpa',
      'Óleo com efeito térmico sutil e sabor gourmet irresistível',
      'Dermatologicamente testado e seguro para uso íntimo',
      'Ideal para complementar sua lingerie favorita'
    ]
  }
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Modelos' },
  { id: 'conjuntos', label: 'Conjuntos de Renda' },
  { id: 'bodys', label: 'Bodys & Espartilhos' },
  { id: 'robes', label: 'Robes & Camisolas' },
  { id: 'noivas', label: 'Linha Noivas' },
  { id: 'sensual', label: 'Perfumaria & Acessórios' }
];

export const TESTIMONIALS = [
  {
    name: 'Camila Rodrigues',
    city: 'São Paulo - SP',
    date: 'Ontem',
    rating: 5,
    text: 'Meninas, simplesmente MARAVILHOSO! A renda é incrivelmente macia, não aperta e não incomoda nada. Meu marido ficou de boca aberta quando vesti o conjunto Scarlet. Chegou em 2 dias com uma caixa preta super discreta e muito cheirosa!',
    product: 'Conjunto Scarlet Passion'
  },
  {
    name: 'Juliana Mendes',
    city: 'Belo Horizonte - MG',
    date: 'Há 3 dias',
    rating: 5,
    text: 'O atendimento pelo WhatsApp é impecável, tiraram todas as minhas dúvidas sobre medidas e acertaram em cheio no tamanho M. O body veste como uma luva e valorizou demais minhas curvas. Já vou pedir mais peças!',
    product: 'Body Rendado Noir Strappy'
  },
  {
    name: 'Beatriz Vasconcelos',
    city: 'Curitiba - PR',
    date: 'Há 5 dias',
    rating: 5,
    text: 'Comprei o conjunto de noiva e o robe para a minha noite de núpcias. A qualidade é de loja de shopping de alto luxo, mas com preço justo. Embalagem 100% lacrada sem nenhuma menção a lingerie por fora, nota 10!',
    product: 'Conjunto Noiva Luxo & Robe'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'A embalagem é realmente discreta e sigilosa?',
    answer: 'Sim, 100% garantido! Nossos pacotes são caixas ou envelopes opacos completamente neutros, sem nenhum logotipo, adesivo ou menção sobre lingeries ou produtos íntimos. A etiqueta de envio contém apenas dados fiscais padrão e o nome do remetente como pessoa jurídica discreta.'
  },
  {
    question: 'Como faço para escolher o tamanho correto?',
    answer: 'Nossas peças seguem a tabela padrão brasileira (P veste 38-40, M veste 42, G veste 44, GG veste 46). Além disso, a maioria das nossas calcinhas e sutiãs contam com alças e laterais reguláveis. Você pode conferir nosso Guia de Medidas logo abaixo ou chamar nossa consultora no WhatsApp para uma recomendação personalizada!'
  },
  {
    question: 'Como funciona a compra pelo WhatsApp?',
    answer: 'É muito simples! Basta escolher seus modelos aqui na página e clicar em "Pedir pelo WhatsApp". Você será direcionada(o) com a mensagem já pré-preenchida com os modelos, cores e tamanhos escolhidos para nossa consultora, que confirma disponibilidade, calcula frete e envia o link ou chave Pix.'
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix (com 5% de desconto imediato), Cartão de Crédito em até 12x (sendo até 3x sem juros) e Boleto Bancário.'
  },
  {
    question: 'Qual é o prazo de postagem e entrega?',
    answer: 'Todos os pedidos em estoque são despachados em até 24 horas úteis após a confirmação do pagamento. O prazo de entrega varia de 2 a 7 dias úteis dependendo da sua região (enviamos via Sedex, PAC ou transportadora com rastreio).'
  },
  {
    question: 'Posso trocar se não servir?',
    answer: 'Sim! Garantimos a primeira troca por tamanho conforme as regras do Código de Defesa do Consumidor, desde que a peça esteja com as etiquetas intactas, protetor higiênico original e sem sinais de uso.'
  }
];

export const BRAND_INFO = {
  name: 'Ai Que Delícia Lingeries',
  slogan: 'Sua melhor escolha, seu melhor momento.',
  taglineSecondary: 'Seu desejo, nossa paixão!',
  phone: '5511999999999',
  phoneFormatted: '(11) 99999-9999',
  instagram: '@aiquedelicia.lingeries',
  email: 'contato@aiquedelicialingeries.com.br',
  freeShippingThreshold: 199.00
};
