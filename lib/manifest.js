/* 
  My Éden Clínica Estética - arquivo editável
  Abra este arquivo no Bloco de Notas para alterar textos, WhatsApp, avaliações e fotos.
  Depois de editar, salve mantendo o nome manifest.js.
*/
(function () {
  window.__MYEDEN__ = {
    version: "20260617",

    brand: {
      name: "My Éden Clínica Estética",
      shortName: "My Éden",
      tagline: "Seu refúgio de beleza e bem-estar.",
      city: "Ribeirão Preto - SP",
      instagram: "@myedenrp",
      instagramUrl: "https://www.instagram.com/myedenrp/",

      /* CONFIRMAR no perfil do Google antes de publicar */
      googleRating: "[X,X]",
      googleReviews: "[N]",
      googleProfileUrl: "#",

      /* Troque por somente números, com DDI e DDD. Exemplo: 5516999999999 */
      whatsappNumber: "55XXXXXXXXXXX",
      whatsappDisplay: "[CONFIRMAR WhatsApp]",

      /* CONFIRMAR dados da clínica */
      address: "[CONFIRMAR endereço em Ribeirão Preto]",
      hours: "[CONFIRMAR horário de atendimento]",
      mapsEmbedUrl: "https://www.google.com/maps?q=Ribeir%C3%A3o%20Preto%20SP&output=embed",

      /* Para procedimentos injetáveis, confirmar profissional habilitado e registro */
      responsibleName: "[CONFIRMAR nome]",
      responsibleRegistry: "[CONFIRMAR registro]",

      sideSignature: "RIBEIRÃO PRETO · @MYEDENRP"
    },

    whatsappMessages: {
      general: "Olá! Vim pelo site e gostaria de agendar.",
      evaluation: "Olá! Vim pelo site e gostaria de agendar uma avaliação."
    },

    treatments: [
      {
        id: "limpeza-de-pele",
        name: "Limpeza de Pele",
        family: "Facial",
        icon: "skin",
        benefit: "Pele renovada, limpa e com viço.",
        description: "Higienização profunda, extração e hidratação para apoiar uma rotina de cuidado mais leve.",
        whatsappText: "Olá! Gostaria de agendar uma limpeza de pele."
      },
      {
        id: "tratamento-de-estrias",
        name: "Tratamento de Estrias",
        family: "Corporal",
        icon: "body",
        benefit: "Suavizar estrias e devolver firmeza à pele.",
        description: "Protocolos voltados para textura e aparência das estrias, sempre avaliados caso a caso.",
        whatsappText: "Olá! Gostaria de agendar uma avaliação para tratamento de estrias."
      },
      {
        id: "botox",
        name: "Botox",
        family: "Injetáveis · médico",
        icon: "botox",
        benefit: "Suavizar linhas de expressão com naturalidade.",
        description: "Toxina botulínica aplicada por profissional habilitado, mediante avaliação individual.",
        whatsappText: "Olá! Gostaria de agendar uma avaliação para Botox."
      },
      {
        id: "reducao-de-medidas",
        name: "Redução de Medidas",
        family: "Corporal",
        icon: "measure",
        benefit: "Modelar o contorno corporal com acompanhamento.",
        description: "Protocolos corporais conduzidos com orientação, sem promessa de números ou resultado certo.",
        whatsappText: "Olá! Gostaria de agendar uma avaliação para redução de medidas."
      },
      {
        id: "drenagem",
        name: "Drenagem",
        family: "Corporal/Bem-estar",
        icon: "drainage",
        benefit: "Desinchar, ativar a circulação e relaxar.",
        description: "Drenagem linfática manual para bem-estar, sensação de leveza e cuidado pós-procedimento quando indicado.",
        whatsappText: "Olá! Gostaria de agendar uma drenagem."
      },
      {
        id: "manicure",
        name: "Manicure",
        family: "Mãos",
        icon: "hands",
        benefit: "O cuidado que fecha o ritual de autocuidado.",
        description: "Cuidado e acabamento das unhas em uma experiência tranquila e caprichosa.",
        whatsappText: "Olá! Gostaria de agendar manicure."
      }
    ],

    /*
      Avaliações do Google:
      1. Copie avaliações reais do perfil do Google.
      2. Troque active para true quando o texto estiver confirmado.
      3. Não invente depoimentos.
    */
    reviews: [
      {
        active: false,
        name: "Nome da cliente",
        initial: "C",
        rating: 5,
        text: "Cole aqui uma avaliação real do Google."
      },
      {
        active: false,
        name: "Nome da cliente",
        initial: "C",
        rating: 5,
        text: "Cole aqui uma avaliação real do Google."
      },
      {
        active: false,
        name: "Nome da cliente",
        initial: "C",
        rating: 5,
        text: "Cole aqui uma avaliação real do Google."
      }
    ],

    /*
      Galeria de resultados:
      - Só aparece no site quando consentimento for true e placeholder for false.
      - Use fotos naturais, autorizadas por termo, sem edição que altere resultado.
      - Resultados variam de pessoa para pessoa.
    */
    gallery: [
      {
        active: false,
        placeholder: true,
        consentimento: false,
        category: "Manicure",
        title: "Placeholder temporário",
        image: "assets/img/placeholder-manicure.webp",
        alt: "Imagem placeholder de unhas",
        note: "Substituir por foto real autorizada antes de publicar."
      }
    ],

    about: {
      title: "Um refúgio para chegar, respirar e ser cuidada com atenção.",
      lead: "A My Éden nasce como um espaço de autocuidado em Ribeirão Preto: acolhedor no atendimento, criterioso na avaliação e sereno na condução de cada protocolo.",
      pillars: [
        "Atendimento individual, com indicação feita após escuta e avaliação.",
        "Ambiente organizado, privativo e preparado para uma experiência tranquila.",
        "Procedimentos injetáveis realizados por profissional habilitado, mediante avaliação."
      ]
    }
  };
})();
