export interface iText {
  competencias: {
    titulo: string;
    listaCompetenciasHard: string[];
    listaCompetenciasSoft: string[];
  };
  contatos: {
    titulo: string;
  };
  header: {
    projetos: string;
    sobre: string;
    contatos: string;
  };
  home: {
    titulo: string;
    texto: string;
    altFoto: string;
  };
  projetos: {
    title: string;
    desc: string;
  };
  pprojetos: {
    kenziehub: string;
    nomadRoom: string;
    altKenziehub: string;
    altNomadRoom: string;
  };
  sobre: {
    texto: string;
  };
}

export const textPT = {
  competencias: {
    titulo: "Aqui estão minhas principais competencias",
    listaCompetenciasHard: [
      "Desenvolvimento web Frontend",
      "Desenvolvimento web Backend",
      "Node.js",
      "React.js",
      "Typescript",
      "Express.js",
      "Styled-components",
      "JavaScript",
      "Java (basico",
      "Spring Boot (basico)",
      "SQL",
      "PostgreSQL",
      "APIs REST",
      "Git",
      "Github",
      "Bitbucket",
      "POO (Programação orientada a objetos)",
      "Scrum",
      "HTML",
      "CSS",
      "Programação assincrona",
      "C++ (basico)",
      "Python",
      "Django",
    ],
    listaCompetenciasSoft: [
      "Comunicação",
      "Liderança",
      "Resolução de problemas",
      "Proatividade",
      "Criatividade",
      "Pensamento lógico",
      "Trabalho em equipe",
    ],
  },
  contatos: {
    titulo: "Fale comigo",
  },
  header: {
    projetos: "projetos",
    sobre: "sobre",
    contatos: "contatos",
  },
  home: {
    titulo: "Seja bem vindo(a) ao meu portfolio pessoal",
    texto:
      "Seja bem vindo ao local onde mostrarei meus projetos e minhas capacidades, alem de dizer um pouco sobre mim e listar minhas competencias",
    altFoto: "minha foto",
  },
  pprojetos: {
    kenziehub:
      "Esse foi meu maior projeto individual. Com a implementação de Typescript e utilização de uma API de cadastro, login e registro de tecnologias, essa aplicação cuida de criar um hub com seus aprendizados",
    nomadRoom:
      "Meu maior projeto em equipe. O grupo composto por Diego Steiner, Breno Lobianco, Eugenio Lobo, Lucas Alex, Jonathan Vinicius, e eu criou um uma aplicação para compartilhamento e procura de quartos para viajantes/mochileiros. O site conta com cadastro de usuarios e quartos e contato direto do interessado com o dono do quarto",
    altKenziehub: "Interface do KenzieHub",
    altNomadRoom: "Interface do NomadRoom",
  },
  projetos: {
    title: "Aqui ficam meus repositórios do GitHub",
    desc: "Só clicar na palavra 'Repo' que você será levado ao projeto",
  },
  sobre: {
    texto: `Minha relação com a tecnologia como desenvolvedor começou no início do
    meu ensino médio, vendo aulas de python com o ancião Gustavo Guanabara.
    Isso me fez tomar a decisão de seguir carreira. Assim que me formei,
    procurei entrar em uma universidade com um curso da área e procurei
    também aprender por fora, com a Kenzie. Gosto da área porque eu
    simplesmente amo criar coisas e amo lógica. A combinação dessas duas
    paixões na programação me fez decidir seguir por esse caminho. Meu
    objetivo é me tornar alguém renomado na área, que é bem requisitado
    tanto para trabalhar em projetos tanto para passar meus conhecimentos.
    Minhas principais qualidades são uma grande avidez e facilidade para
    aprender, bom trabalho em equipe, comunicação, liderança carismática,
    proatividade e criatividade. Nos ultimos meses tenho trabalhado como
    desenvolvedor fullstack em uma startup de gestão de resíduos, onde tenho
    aprendido muito com a prática em varias stacks`,
  },
};
export const textEN = {
  competencias: {
    titulo: "My main skills",
    listaCompetenciasHard: [
      "Frontend web development",
      "Backend web development",
      "Node.js",
      "React.js",
      "Typescript",
      "Express.js",
      "Styled-components",
      "JavaScript",
      "Java (basic)",
      "Spring Boot (basic)",
      "SQL",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "Github",
      "Bitbucket",
      "OOP (Object Oriented Programming)",
      "Scrum",
      "HTML",
      "CSS",
      "Asyncronous programming",
      "C++ (basic)",
      "Python",
      "Django",
    ],
    listaCompetenciasSoft: [
      "Communication",
      "Leadership",
      "Problem solving",
      "Proactivity",
      "Creativity",
      "Logical Thinking",
      "Teamwork",
    ],
  },
  contatos: {
    titulo: "Talk to me",
  },
  header: {
    projetos: "Projects",
    sobre: "About",
    contatos: "Contact",
  },
  home: {
    titulo: "Welcome to my personal portfolio",
    texto:
      "Welcome to the place where I will show my projects and my capabilities, in addition to saying a little about myself and listing my skills",
    altFoto: "minha foto",
  },
  pprojetos: {
    kenziehub:
      "This was my biggest individual project. With the implementation of Typescript and the use of an API for registration, login and registration of technologies, this application takes care of creating a hub with your learnings",
    nomadRoom:
      "My biggest team project. The group composed by Diego Steiner, Breno Lobianco, Eugenio Lobo, Lucas Alex, Jonathan Vinicius, and I created an application for sharing and searching for rooms for travelers/backpackers. The site has user registration and rooms and direct contact of the interested one with the owner of the room",
    altKenziehub: "KenzieHub interface",
    altNomadRoom: "NomadRoom interface",
  },
  projetos: {
    title: "Here are my github repositories",
    desc: "Just click on the 'repo' word and you will be moved to the repository folder on github",
  },
  sobre: {
    texto: `My relationship with technology as a developer started at the beginning of
    my high school, watching python classes with the teacher Gustavo Guanabara.
    This made me decide to pursue a career. As soon as I graduated,
    I tried to get into a university with a course in the area and I tried
    also learn from the outside, with Kenzie. I like the area because I
    I just love creating things and I love logic. The combination of these two
    passions in programming made me decide to follow this path. My
    goal is to become someone renowned in the field, who is in great demand
    so much to work on projects so much to pass on my knowledge.
    My main qualities are a great eagerness and facility for
    learn, good teamwork, communication, charismatic leadership,
    proactivity and creativity. In the last few months I have been working as
    fullstack developer at a waste management startup, where I have
    learned a lot from practice on various stacks`,
  },
};
