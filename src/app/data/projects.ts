import { Project } from './models/project-card.model';

export const projects: Project[] = [
  {
    id: 'zwemclub',
    title: 'Project PHP',
    subtitle: 'Groepsproject: Zwemclub Applicatie Maken in Laravel',
    category: 'Front-end',
    when: 'year2',
    description:
      'In het tweede jaar hebben we een groepsproject uitgevoerd met Laravel. We hebben een zwemclub applicatie gemaakt, waarbij mijn focus lag op de webshop. Daarnaast heb ik designs gemaakt en geholpen met het ERD en de back-end.',
    mainImageLocation: './projects/php-zwemclub/PHP_homepage.jpg',
    technologies: ['Laravel', 'Tailwind'],
    teamProject: {
      isTeamProject: true,
      team: [
        {
          name: 'Eva Burghoorn (Teamleider)',
          linkedIn: 'https://www.linkedin.com/in/eva-burghoorn-432985230/',
        },
        {
          name: 'Thomas de Ceuster',
          linkedIn: 'https://www.linkedin.com/in/thomas-de-ceuster-329326252/',
        },
        {
          name: 'Seppe van Eynde',
          linkedIn: 'https://www.linkedin.com/in/seppe-van-eynde-1974bb251/',
        },
        {
          name: 'Liesa Moors',
          linkedIn: 'https://www.linkedin.com/in/liesa-moors-0b0543251/',
        },
        {
          name: 'Quinten Bosch',
          linkedIn: 'https://www.linkedin.com/in/quinten-bosch-517472253/',
        },
      ],
      text: {
        title: 'Team Project PHP',
        description: [
          'Ons team bestond uit zes studenten. In het eerste semester werkten we een week lang aan prototypes en een ERD. In het tweede semester werkten we wekelijks een volle dag op de campus aan dit project.',
          'De samenwerking binnen het team verliep goed. Mijn hoofdverantwoordelijkheid was de webshop. Dagelijks hadden we een stand-up meeting in de ochtend en twee vergaderingen met de klant.',
        ],
        imageLocation: null,
      },
    },
    textSections: [
      {
        title: 'Webshop',
        description: [
          'Mijn belangrijkste bijdrage aan dit project was de ontwikkeling van de webshop.',
        ],
        imageLocation: './projects/php-zwemclub/Webshop.jpg',
      },
    ],
    projectHostedUrl: null,
  },
  {
    id: 'training',
    title: 'C# Training',
    subtitle: 'Groepsproject: OOP in C# Training bij Wico Campus Neerpelt',
    category: 'Back-end',
    when: 'year2',
    description:
      'In het tweede jaar moesten we een training geven voor een opdrachtgever. Ik heb hiervoor mijn oude middelbare school benaderd en een trainingssessie georganiseerd over OOP in C#. We hebben een cursus, oefeningen en een presentatie voorbereid.',
    mainImageLocation: './projects/training/training.jpg',
    technologies: ['Vitepress', 'Soft-skills', 'Organisational-skills'],
    teamProject: {
      isTeamProject: true,
      team: [
        {
          name: 'Yarin van Raam',
          linkedIn: 'https://www.linkedin.com/in/yarin-v/',
        },
        {
          name: 'Wouter Selis',
          linkedIn: 'https://www.linkedin.com/in/wouter-selis/',
        },
      ],
      text: {
        title: 'Team C# Training',
        description: [
          'Ons team bestond uit drie personen: mezelf, Yarin en Wouter. Yarin en ik waren oud-studenten van de middelbare school waar we de training gaven.',
        ],
        imageLocation: null,
      },
    },
    textSections: [
      {
        title: 'Organisatie',
        description: [
          'Voor het organiseren van deze trainingssessie nam ik contact op met mijn oude middelbare school Wico Campus Neerpelt. Na overleg met mijn oude leraar hebben we gekozen voor het onderwerp OOP in C#.',
          'Ik plande de training op een geschikt moment voor zowel de school als mijn teamgenoten. Ik nam het initiatief om de cursus te ontwikkelen en vroeg mijn teamleden om oefeningen voor te bereiden voor de deelnemers.',
          'Ik regelde ook de logistiek, zoals het vervoer en de benodigde apparatuur (zoals een beamer en USB-sticks), en we maakten gezamenlijk een presentatie.',
        ],
        imageLocation: './projects/training/campus-neerpelt.jpg',
      },
      {
        title: 'Cursusontwikkeling',
        description: [
          'Voor de online cursus maakte ik een website met Vitepress, een technologie die ik wilde leren. De cursus werd gegeven aan de leerlingen van 6I&N, en later hoorde ik dat de leraar mijn cursus ook gebruikte om OOP aan 5I&N te onderwijzen.',
        ],
        imageLocation: './projects/training/cursus.jpg',
      },
      {
        title: 'Training',
        description: [
          'De training verliep soepel. We leerden de leerlingen van 6I&N hoe ze konden beginnen met OOP in C#. Na de presentatie maakten de leerlingen de oefeningen uit de cursus. We introduceerden ook Windows Forms als een extra uitdaging.',
        ],
        imageLocation: './projects/training/training.jpg',
      },
    ],
    projectHostedUrl: 'https://brentsimons.github.io/CursusCSharp/',
  },
  {
    id: '20eeuw',
    title: 'Website 20e Eeuw',
    subtitle: 'Soloproject: Website over de 20e Eeuw, gemaakt in Bootstrap, HTML, JS',
    category: 'Front-end',
    when: 'year1',
    description:
      'In het eerste jaar maakte ik een soloproject met Bootstrap, HTML en JS. Ik creëerde een website over de 20e eeuw, waarbij mijn focus lag op het ontwerp.',
    mainImageLocation: './projects/20e-eeuw/home-page.jpg',
    technologies: ['Bootstrap', 'HTML', 'JavaScript'],
    teamProject: {
      isTeamProject: true,
      team: null,
      text: {
        title: 'Team 20e Eeuw',
        description: [
          'Aanvankelijk had ik een team van drie, maar een van mijn teamleden stopte voordat het project begon. Mijn andere teamgenoot kwam niet naar de les en droeg niet bij aan het project.',
        ],
        imageLocation: null,
      },
    },
    textSections: [
      {
        title: 'Homepagina',
        description: [
          'Ik maakte de homepagina met een korte uitleg over de 20e eeuw, een voorstelling van mij en mijn teamgenoot, en een beschrijving van elke subpagina. Hier zijn ook de navigatiebalk en de voettekst die ik heb gemaakt te zien.',
        ],
        imageLocation: './projects/20e-eeuw/home-page.jpg',
      },
      {
        title: 'Koude Oorlog',
        description: [
          'Voor de subpagina over de Koude Oorlog experimenteerde ik met een accordion object van Bootstrap, waaraan ik ook custom styling toevoegde.',
        ],
        imageLocation: './projects/20e-eeuw/koude-oorlog.jpg',
      },
      {
        title: 'Val van het Communisme',
        description: [
          'Voor de subpagina over de val van het communisme maakte ik een custom tijdlijn. Ik schreef een JavaScript functie die berekende hoe lang geleden dit evenement plaatsvond en gaf het bootstrap card object custom styling.',
        ],
        imageLocation: './projects/20e-eeuw/val-communisme.jpg',
      },
    ],
    projectHostedUrl: 'https://brentsimons.github.io/website-eeuw-20/',
  },
];
