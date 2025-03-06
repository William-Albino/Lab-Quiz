export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  level: number; // 0: easy, 1: medium, 2: hard
}

export const questions: Question[] = [
  // Nivel 0 - Fácil
  {
    question: "¿Qué es Bitcoin?",
    options: [
      "Una empresa tecnológica",
      "Una criptomoneda descentralizada",
      "Un banco digital",
      "Un sistema de pago centralizado"
    ],
    correctAnswer: 1,
    level: 0
  },
  {
    question: "¿Quién creó Bitcoin?",
    options: [
      "Elon Musk",
      "Bill Gates",
      "Satoshi Nakamoto",
      "Mark Zuckerberg"
    ],
    correctAnswer: 2,
    level: 0
  },
  {
    question: "¿En qué año se lanzó Bitcoin?",
    options: [
      "2005",
      "2009",
      "2013",
      "2017"
    ],
    correctAnswer: 1,
    level: 0
  },
  {
    question: "¿Qué es un blockchain?",
    options: [
      "Un tipo de hardware para minar criptomonedas",
      "Una cadena de bloques que registra transacciones",
      "Una empresa de criptomonedas",
      "Un tipo de billetera digital"
    ],
    correctAnswer: 1,
    level: 0
  },
  {
    question: "¿Qué significa la sigla NFT?",
    options: [
      "New Financial Transaction",
      "Network File Transfer",
      "Non-Fungible Token",
      "National Fintech Technology"
    ],
    correctAnswer: 2,
    level: 0
  },
  {
    question: "¿Cuál de estas NO es una criptomoneda?",
    options: [
      "Ethereum",
      "Ripple",
      "PayPal",
      "Litecoin"
    ],
    correctAnswer: 2,
    level: 0
  },
  {
    question: "¿Qué es una wallet o billetera de criptomonedas?",
    options: [
      "Una aplicación para comprar acciones",
      "Un software para almacenar y gestionar criptomonedas",
      "Una tarjeta de crédito especial",
      "Un banco digital"
    ],
    correctAnswer: 1,
    level: 0
  },
  {
    question: "¿Qué es un exchange de criptomonedas?",
    options: [
      "Una plataforma para intercambiar criptomonedas",
      "Un tipo de blockchain",
      "Un método de minería",
      "Un tipo de wallet"
    ],
    correctAnswer: 0,
    level: 0
  },
  {
    question: "¿Cuál es la unidad más pequeña de Bitcoin?",
    options: [
      "Bit",
      "Satoshi",
      "Wei",
      "Nano"
    ],
    correctAnswer: 1,
    level: 0
  },
  {
    question: "¿Qué significa HODL en el mundo de las criptomonedas?",
    options: [
      "High-Optimized Digital Ledger",
      "Hold On for Dear Life (mantener a largo plazo)",
      "Highly Optimized Decentralized Liquidity",
      "Home Of Digital Lending"
    ],
    correctAnswer: 1,
    level: 0
  },
  
  // Nivel 1 - Medio
  {
    question: "¿Qué es un smart contract o contrato inteligente?",
    options: [
      "Un contrato legal firmado digitalmente",
      "Un programa que se ejecuta automáticamente en la blockchain",
      "Un tipo de billetera digital",
      "Un acuerdo entre mineros"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    question: "¿Qué criptomoneda introdujo los contratos inteligentes?",
    options: [
      "Bitcoin",
      "Ripple",
      "Ethereum",
      "Litecoin"
    ],
    correctAnswer: 2,
    level: 1
  },
  {
    question: "¿Qué es la minería de criptomonedas?",
    options: [
      "Extraer criptomonedas físicas del suelo",
      "Proceso de verificar transacciones y añadir bloques a la blockchain",
      "Comprar criptomonedas a bajo precio",
      "Crear nuevas criptomonedas sin verificación"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    question: "¿Qué es un fork en criptomonedas?",
    options: [
      "Una herramienta para minar",
      "Una división en la blockchain que crea una nueva versión",
      "Un tipo de ataque a la red",
      "Un método de pago"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    question: "¿Qué significa DeFi?",
    options: [
      "Definitive Finance",
      "Decentralized Finance",
      "Digital Financial Institution",
      "Distributed Financial Index"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    question: "¿Qué es un token ERC-20?",
    options: [
      "Un tipo de hardware wallet",
      "Un estándar para tokens en la blockchain de Ethereum",
      "Una criptomoneda específica",
      "Un certificado de minería"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    question: "¿Qué es el halving de Bitcoin?",
    options: [
      "Cuando el precio de Bitcoin se reduce a la mitad",
      "Cuando la velocidad de la red se reduce",
      "Cuando la recompensa por minar un bloque se reduce a la mitad",
      "Cuando se divide la blockchain"
    ],
    correctAnswer: 2,
    level: 1
  },
  {
    question: "¿Qué es una ICO?",
    options: [
      "International Crypto Organization",
      "Initial Coin Offering",
      "Internal Coin Operation",
      "Integrated Crypto Output"
    ],
    correctAnswer: 1,
    level: 1
  },
  {
    question: "¿Qué significa P2P en el contexto de criptomonedas?",
    options: [
      "Pay to Play",
      "Proof to Purchase",
      "Peer to Peer",
      "Public to Private"
    ],
    correctAnswer: 2,
    level: 1
  },
  {
    question: "¿Qué es una stablecoin?",
    options: [
      "Una criptomoneda con precio estable vinculado a un activo",
      "Una criptomoneda que no se puede minar",
      "Una criptomoneda con baja volatilidad natural",
      "Una criptomoneda respaldada por un gobierno"
    ],
    correctAnswer: 0,
    level: 1
  },
  
  // Nivel 2 - Difícil
  {
    question: "¿Qué es el problema de los generales bizantinos en relación con blockchain?",
    options: [
      "Un conflicto histórico que inspiró la creación de Bitcoin",
      "Un problema de consenso en sistemas distribuidos que blockchain resuelve",
      "Una vulnerabilidad en el código de Bitcoin",
      "Un método de ataque a redes blockchain"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es el ataque del 51% en una red blockchain?",
    options: [
      "Cuando el 51% de los usuarios pierden sus fondos",
      "Cuando el 51% de los nodos se desconectan",
      "Cuando una entidad controla más del 51% del poder de minería",
      "Cuando el 51% de las transacciones fallan"
    ],
    correctAnswer: 2,
    level: 2
  },
  {
    question: "¿Qué es la firma de Schnorr en Bitcoin?",
    options: [
      "La firma digital del creador de Bitcoin",
      "Un algoritmo de firma digital que mejora la privacidad y eficiencia",
      "Un método de verificación de transacciones",
      "Un tipo de dirección de Bitcoin"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es el Merkle Tree en blockchain?",
    options: [
      "Un tipo de algoritmo de minería",
      "Una estructura de datos para verificar eficientemente grandes conjuntos de datos",
      "Un tipo de wallet",
      "Un método de encriptación"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es la escalabilidad de capa 2 (Layer 2)?",
    options: [
      "La segunda versión de una blockchain",
      "Soluciones construidas sobre una blockchain existente para mejorar la escalabilidad",
      "Un segundo nivel de seguridad",
      "Un método de minería avanzado"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es un oráculo en blockchain?",
    options: [
      "Un nodo especial que predice precios futuros",
      "Un servicio que conecta blockchains con datos del mundo real",
      "Un tipo de contrato inteligente",
      "Un método de consenso"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es el gas en Ethereum?",
    options: [
      "Un token específico de Ethereum",
      "La unidad que mide el trabajo computacional en la red",
      "Un método de minería",
      "El combustible físico para los servidores"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es un nodo completo (full node)?",
    options: [
      "Un minero con gran capacidad computacional",
      "Un ordenador que almacena una copia completa de la blockchain",
      "Un exchange centralizado",
      "Un desarrollador principal de una criptomoneda"
    ],
    correctAnswer: 1,
    level: 2
  },
  {
    question: "¿Qué es la prueba de conocimiento cero (Zero-Knowledge Proof)?",
    options: [
      "Un método para verificar transacciones sin revelar información sensible",
      "Un test para nuevos usuarios de criptomonedas",
      "Un tipo de ataque a la blockchain",
      "Un método para crear nuevas criptomonedas"
    ],
    correctAnswer: 0,
    level: 2
  },
  {
    question: "¿Qué es el Taproot en Bitcoin?",
    options: [
      "Un tipo de wallet",
      "Una actualización que mejora la privacidad y eficiencia de los contratos inteligentes",
      "Un método de minería",
      "Un tipo de fork"
    ],
    correctAnswer: 1,
    level: 2
  }
];