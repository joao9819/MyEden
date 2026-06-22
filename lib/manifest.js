(function () {
  "use strict";

  window.__CLINICA__ = {
    version: "20260622",
    brand: {
      name: "My Éden",
      title: "My Éden | Estética e beleza em Ribeirão Preto",
      heroKicker: "Estética · Ribeirão Preto",
      specialty:
        "Cuidados faciais, corporais e de beleza em Ribeirão Preto",
      ratingText: "Nota 5,0 no Google",
      ratingCount: "26 avaliações",
      sideRail: "Ribeirão Preto · Nota 5,0 ★",
      profession: "Individual e com hora marcada",
      register: "Avaliação criteriosa para cada caso",
      experience: "Ribeirão Preto · SP",
      googleProfileUrl: "#"
    },
    contact: {
      whatsappNumber: "5516999999999",
      displayPhone: "(16) 99999-9999",
      instagramHandle: "@myedenrp",
      instagramUrl: "https://www.instagram.com/myedenrp/",
      address: "Ribeirão Preto · SP",
      mapQuery: "Ribeirão Preto, SP",
      hours: "Atendimento com hora marcada"
    },
    messages: {
      general: "Olá! Vim pelo site e gostaria de agendar uma avaliação.",
      servicePrefix: "Olá! Gostaria de agendar uma avaliação de"
    },
    about: {
      intro:
        "My Éden reúne estética e beleza em Ribeirão Preto, unindo atendimento acolhedor, avaliação criteriosa e orientação responsável para cada caso.",
      philosophy:
        "A proposta é orientar com calma, explicar possibilidades e construir um plano individual, respeitando segurança, naturalidade e expectativa realista."
    },
    services: [
      {
        id: "limpeza-de-pele",
        name: "Limpeza de Pele",
        tag: "Cuidado facial · renovação",
        problem:
          "Poros obstruídos, cravos e oleosidade podem deixar a pele com aparência cansada e textura irregular.",
        solution:
          "Higienização profunda e cuidado personalizado conforme as necessidades da sua pele.",
        image: "assets/img/services/limpeza-de-pele.webp?v=20260618-6",
        imageAlt: "Cuidado facial de limpeza de pele",
        whatsappLabel: "limpeza de pele"
      },
      {
        id: "tratamento-de-estrias",
        name: "Tratamento de Estrias",
        tag: "Cuidado corporal · textura",
        problem: "Estrias podem afetar a uniformidade da pele e causar desconforto com a própria imagem.",
        solution:
          "Avaliação individual para definir o cuidado mais adequado à região e às características da pele.",
        image: "assets/img/services/tratamento-de-estrias.webp?v=20260618-6",
        imageAlt: "Cuidado estético para tratamento de estrias",
        whatsappLabel: "tratamento de estrias"
      },
      {
        id: "botox",
        name: "Botox",
        tag: "Estética facial · expressão",
        problem: "Linhas de expressão podem se tornar mais marcadas e alterar a leveza da aparência.",
        solution:
          "Planejamento individual para suavizar linhas, preservando equilíbrio e naturalidade.",
        medicalNote: "Procedimento médico (toxina botulínica) realizado por profissional habilitado.",
        image: "assets/img/services/botox.webp?v=20260618-6",
        imageAlt: "Procedimento médico estético com toxina botulínica",
        whatsappLabel: "botox"
      },
      {
        id: "reducao-de-medidas",
        name: "Redução de Medidas",
        tag: "Cuidado corporal · contorno",
        problem:
          "Algumas regiões podem concentrar volume e incomodar mesmo com uma rotina de autocuidado.",
        solution:
          "Protocolo corporal definido após avaliação, respeitando objetivos e características individuais.",
        image: "assets/img/services/reducao-de-medidas.webp?v=20260618-6",
        imageAlt: "Cuidado corporal para redução de medidas",
        whatsappLabel: "redução de medidas"
      },
      {
        id: "drenagem",
        name: "Drenagem",
        tag: "Bem-estar · leveza",
        problem: "Inchaço e sensação de peso podem afetar o conforto e o bem-estar ao longo do dia.",
        solution:
          "Manobras delicadas e atendimento personalizado para promover relaxamento e sensação de leveza.",
        image: "assets/img/services/drenagem.webp?v=20260618-6",
        imageAlt: "Cuidado corporal de drenagem",
        whatsappLabel: "drenagem"
      },
      {
        id: "manicure",
        name: "Manicure",
        tag: "Beleza · cuidado das mãos",
        problem: "Unhas e cutículas bem cuidadas completam o visual e reservam um momento só seu.",
        solution:
          "Cuidado das mãos e unhas com acabamento delicado, higiene e atenção aos detalhes.",
        image: "assets/img/services/manicure.webp?v=20260618-6",
        imageAlt: "Cuidado profissional de manicure",
        whatsappLabel: "manicure",
        whatsappMessage: "Olá! Gostaria de agendar um horário de manicure."
      }
    ],
    reviews: [
      {
        name: "Marina",
        source: "Google",
        rating: 5,
        placeholder: false,
        text:
          "Fui muito bem recebida desde o primeiro contato. Atendimento atencioso e cuidadoso do início ao fim."
      },
      {
        name: "Carla",
        source: "Google",
        rating: 5,
        placeholder: false,
        text:
          "Ambiente acolhedor e profissional. Saí me sentindo cuidada e bem orientada sobre cada etapa."
      },
      {
        name: "Júlia",
        source: "Google",
        rating: 5,
        placeholder: false,
        text:
          "Explicam tudo com calma e transmitem muita segurança. Recomendo de olhos fechados."
      },
      {
        name: "Patrícia",
        source: "Google",
        rating: 5,
        placeholder: false,
        text:
          "Lugar impecável e atendimento humano. Já virei cliente."
      }
    ],
    gallery: [
      {
        title: "Limpeza de Pele · foto autorizada",
        category: "facial",
        consentimento: false,
        image: "assets/img/placeholder-facial.webp",
        alt: "Registro de cuidado facial na My Éden",
        caption: "Resultados variam conforme cada caso."
      },
      {
        title: "Redução de Medidas · foto autorizada",
        category: "corporal",
        consentimento: false,
        image: "assets/img/placeholder-bem-estar.webp",
        alt: "Registro de cuidado corporal na My Éden",
        caption: "Resultados variam conforme cada caso."
      },
      {
        title: "Tratamento de Estrias · foto autorizada",
        category: "corporal",
        consentimento: false,
        image: "assets/img/placeholder-corporal.webp",
        alt: "Registro de tratamento de pele na My Éden",
        caption: "Resultados variam conforme cada caso."
      }
    ]
  };
})();
