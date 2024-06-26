import { Project } from './models/project-card.model';

export const projects: Project[] = [{
  id: 'zwemclub',
  title: 'Project PHP',
  subtitle: 'Groepsproject: Zwemclub Applicatie Maken in Laravel',
  category: 'Front-end',
  when: 2.75,
  description: 'In het tweede jaar hebben we een groepsproject uitgevoerd met Laravel. We hebben een zwemclub applicatie gemaakt, waarbij mijn focus lag op de webshop. Daarnaast heb ik designs gemaakt en geholpen met het ERD en de back-end.',
  mainImageLocation: './projects/php-zwemclub/PHP_homepage.jpg',
  technologies: ['Laravel', 'Tailwind'],
  teamProject: {
    isTeamProject: true, team: [{
      name: 'Eva Burghoorn (Teamleider)', linkedIn: 'https://www.linkedin.com/in/eva-burghoorn-432985230/'
    }, {
      name: 'Thomas de Ceuster', linkedIn: 'https://www.linkedin.com/in/thomas-de-ceuster-329326252/'
    }, {
      name: 'Seppe van Eynde', linkedIn: 'https://www.linkedin.com/in/seppe-van-eynde-1974bb251/'
    }, {
      name: 'Liesa Moors', linkedIn: 'https://www.linkedin.com/in/liesa-moors-0b0543251/'
    }, {
      name: 'Quinten Bosch', linkedIn: 'https://www.linkedin.com/in/quinten-bosch-517472253/'
    }], text: {
      title: 'Team Project PHP',
      description: ['Ons team bestond uit zes studenten. In het eerste semester werkten we een week lang aan prototypes en een ERD. In het tweede semester werkten we wekelijks een volle dag op de campus aan dit project.', 'De samenwerking binnen het team verliep goed. Mijn hoofdverantwoordelijkheid was de webshop. Dagelijks hadden we een stand-up meeting in de ochtend en twee vergaderingen met de klant.'],
      imageLocation: null
    }
  },
  textSections: [{
    title: 'Webshop',
    description: ['Mijn belangrijkste bijdrage aan dit project was de ontwikkeling van de webshop.'],
    imageLocation: './projects/php-zwemclub/Webshop.jpg'
  }],
  projectHostedUrl: null,
  githubUrl: null
}, {
  id: 'training',
  title: 'C# Training',
  subtitle: 'Groepsproject: OOP in C# Training bij Wico Campus Neerpelt',
  category: 'Back-end',
  when: 2.85,
  description: 'In het tweede jaar moesten we een training geven voor een opdrachtgever. Ik heb hiervoor mijn oude middelbare school benaderd en een trainingssessie georganiseerd over OOP in C#. We hebben een cursus, oefeningen en een presentatie voorbereid.',
  mainImageLocation: './projects/training/csharp.jpg',
  technologies: ['Vitepress', 'Soft-skills', 'Organisational-skills'],
  teamProject: {
    isTeamProject: true, team: [{
      name: 'Yarin van Raam', linkedIn: 'https://www.linkedin.com/in/yarin-v/'
    }, {
      name: 'Wouter Selis', linkedIn: 'https://www.linkedin.com/in/wouter-selis/'
    }], text: {
      title: 'Team C# Training',
      description: ['Ons team bestond uit drie personen: mezelf, Yarin en Wouter. Yarin en ik waren oud-studenten van de middelbare school waar we de training gaven.'],
      imageLocation: null
    }
  },
  textSections: [{
    title: 'Organisatie',
    description: ['Voor het organiseren van deze trainingssessie nam ik contact op met mijn oude middelbare school Wico Campus Neerpelt. Na overleg met mijn oude leraar hebben we gekozen voor het onderwerp OOP in C#.', 'Ik plande de training op een geschikt moment voor zowel de school als mijn teamgenoten. Ik nam het initiatief om de cursus te ontwikkelen en vroeg mijn teamleden om oefeningen voor te bereiden voor de deelnemers.', 'Ik regelde ook de logistiek, zoals het vervoer en de benodigde apparatuur (zoals een beamer en USB-sticks), en we maakten gezamenlijk een presentatie.'],
    imageLocation: './projects/training/campus-neerpelt.jpg'
  }, {
    title: 'Cursusontwikkeling',
    description: ['Voor de online cursus maakte ik een website met Vitepress, een technologie die ik wilde leren. Vitepress is een JS framework dat dient om een website te genereren op basis van MD bestanden met YML configuratie. Voor deze cursus heb ik ook Github Pages geleerd, hoe werkt dit, en hoe host ik een Vitepress applicatie hierop, Github pages is ook een service die ik later in mijn studies nog veel zou gebruiken. De cursus werd gegeven aan de leerlingen van 6I&N tijdens de training, later hoorde ik dat de leraar mijn cursus ook is blijven gebruiken beide voor de klas 6I&N om hun alle oefeningen te laten maken, en aan 5I&N om hun OOP aan te brengen..'],
    imageLocation: './projects/training/cursus.jpg'
  }, {
    title: 'Training',
    description: ['De training verliep soepel. We leerden de leerlingen van 6I&N hoe ze konden beginnen met OOP in C#. Na de presentatie maakten de leerlingen de oefeningen uit de cursus. We introduceerden ook Windows Forms als een extra uitdaging.'],
    imageLocation: './projects/training/training.jpg'
  }],
  projectHostedUrl: 'https://brentsimons.github.io/CursusCSharp/',
  githubUrl: 'https://github.com/BrentSimons/CursusCSharp'
}, {
  id: '20eeuw',
  title: 'Website 20e Eeuw',
  subtitle: 'Soloproject: Website over de 20e Eeuw, gemaakt in Bootstrap, HTML, JS',
  category: 'Front-end',
  when: 1.75,
  description: 'In het eerste jaar maakte ik een soloproject met Bootstrap, HTML en JS. Ik creëerde een website over de 20e eeuw, waarbij mijn focus lag op het ontwerp.',
  mainImageLocation: './projects/20e-eeuw/home-page.jpg',
  technologies: ['Bootstrap', 'HTML', 'JavaScript'],
  teamProject: {
    isTeamProject: true, team: null, text: {
      title: 'Team 20e Eeuw',
      description: ['Aanvankelijk had ik een team van drie, maar een van mijn teamleden stopte voordat het project begon. Mijn andere teamgenoot kwam niet naar de les en droeg niet bij aan het project.'],
      imageLocation: null
    }
  },
  textSections: [{
    title: 'Homepagina',
    description: ['Ik maakte de homepagina met een korte uitleg over de 20e eeuw, een voorstelling van mij en mijn teamgenoot, en een beschrijving van elke subpagina. Hier zijn ook de navigatiebalk en de voettekst die ik heb gemaakt te zien.'],
    imageLocation: './projects/20e-eeuw/home-page.jpg'
  }, {
    title: 'Koude Oorlog',
    description: ['Voor de subpagina over de Koude Oorlog experimenteerde ik met een accordion object van Bootstrap, waaraan ik ook custom styling toevoegde.'],
    imageLocation: './projects/20e-eeuw/koude-oorlog.jpg'
  }, {
    title: 'Val van het Communisme',
    description: ['Voor de subpagina over de val van het communisme maakte ik een custom tijdlijn. Ik schreef een JavaScript functie die berekende hoe lang geleden dit evenement plaatsvond en gaf het bootstrap card object custom styling.'],
    imageLocation: './projects/20e-eeuw/val-communisme.jpg'
  }],
  projectHostedUrl: 'https://brentsimons.github.io/website-eeuw-20/',
  githubUrl: null
}, {
  id: 'microservices',
  title: 'BNB Microservices',
  subtitle: 'Bed en Breakfast Management Microservices Deployment',
  category: 'Back-end',
  when: 3.25,
  description: 'Voor het vak Enterprise Development Experience hebben we een uitdagend project uitgevoerd waarbij we een microservices deployment moesten realiseren. Het gekozen onderwerp was een Bed en Breakfast management systeem. Dit project was gericht op het creëren van een schaalbare en efficiënte oplossing voor het beheren van verschillende aspecten van een BNB, waaronder gebouwbeheer, klantbeheer, kamerbeheer en reserveringsbeheer. De focus lag op het toepassen van moderne technologieën binnen softwareontwikkeling, zoals Spring, Docker en OAuth2.',
  mainImageLocation: './projects/microservices/APIDiagram.jpg',
  technologies: ['Spring', 'MySQL', 'MongoDB', 'API Gateway', 'Docker', 'Angular'],
  teamProject: {
    isTeamProject: true, team: [{
      name: 'Siebe Michiels', linkedIn: 'https://www.linkedin.com/in/siebe-michiels/'
    }], text: {
      title: 'Team BNB Microservice',
      description: ['Ons team bestond uit twee personen, ons teamwerk was eerder feature based, waarin ik de features van de PersonService, BNBService, docker configuratie, APIGateway en front-end heb gemaakt.'],
      imageLocation: null
    }
  },
  textSections: [{
    title: 'Gemaakte microservices',
    description: ['Tijdens dit project heb ik twee belangrijke microservices ontwikkeld: de BNB Service en de Person Service.', 'De BNB Service, gebouwd met Spring en gekoppeld aan een MySQL-database, is verantwoordelijk voor het beheer van de gebouwen van de Bed en Breakfasts met meerdere locaties. ', 'De Person Service, ook ontwikkeld met Spring maar gekoppeld aan een MongoDB-database, richt zich op het beheren van klanten die bij reserveringen worden ingevoerd. Een interessant aspect van deze service was het gebruik van MongoDB, waarbij we een apart Contact object binnen het Person object hebben opgenomen om flexibel om te gaan met klantinformatie. Dit gaf ons de mogelijkheid om de voordelen van een NoSQL database te benutten, zoals schaalbaarheid en snelle toegang tot gegevens. Het ontwikkelen van deze microservice heeft ons waardevolle inzichten gegeven in het gebruik van MongoDB in een microservices architectuur.'],
    imageLocation: './projects/microservices/ERD.jpg'
  }, {
    title: 'API Gateway (+OAuth2 Security)',
    description: ['De API Gateway speelt een cruciale rol in ons microservices project door als centrale toegangspoort te fungeren voor alle client requests. Ik heb de API Gateway geconfigureerd om endpoints van de verschillende microservices door te sturen naar de gateway en om te beslissen welke endpoints authenticatie vereisen. Voor de authenticatie heb ik een Google OAuth2 knop geïntegreerd, waardoor gebruikers kunnen inloggen met hun Google-account en een JWT token ontvangen.'],
    imageLocation: './projects/microservices/AUTH.jpg'
  }, {
    title: 'Docker Netwerk van 4 Spring APIs en 1 Gateway (+ Diagram)',
    description: ['Voor dit project heb ik het volledige Docker netwerk opgezet, dat bestaat uit 4 microservices, hun bijbehorende databases, de API Gateway. Tijdens de ontwikkeling kwamen we een probleem tegen waarbij de services die MySQL gebruikten, bleven crashen in de eerste 30+ seconden nadat de database was opgestart. Ik heb een oplossing gevonden door health checks te combineren met depends-on in docker-compose, waardoor de APIs pas worden opgestart nadat de databases volledig zijn opgestart. Dit zorgde voor een stabiele en betrouwbare omgeving voor onze microservices.'],
    imageLocation: './projects/microservices/APIDiagram.jpg'
  }, {
    title: 'README',
    description: ['De README van ons project bevat documentatie over het project, inclusief uitleg over de opzet, instructies voor het deployen, het ERD (gemaakt door een teamgenoot), het Docker compose diagram, en een volledige lijst van alle beschikbare endpoints met voorbeeldaanvragen en responsen. Het schrijven van de README was een gezamenlijke inspanning, waarbij ik het grootste deel van de inhoud heb verzorgd en mijn teammate de endpoint lijst heeft gemaakt.'],
    imageLocation: './projects/microservices/README.jpg'
  }, {
    title: 'Angular Applicatie met Login',
    description: ['Als extra onderdeel van het project heb ik een Angular applicatie ontwikkeld om aanvullende punten te scoren. De Angular applicatie bevat een homepage, vier CRUD-operaties en een reserveringsformulier, allemaal gemaakt met Angular versie 16. Deze applicatie biedt een intuïtieve gebruikersinterface voor het beheren van verschillende aspecten van de Bed en Breakfast, inclusief het maken en beheren van reserveringen. Het ontwikkelen van deze applicatie gaf mij de kans om mijn front-end vaardigheden te verbeteren en te experimenteren met nieuwe technologieën.'],
    imageLocation: './projects/microservices/RESERVATION-FILLED-IN.jpg'
  }],
  projectHostedUrl: null,
  githubUrl: 'https://github.com/BrentSimons/Project-EDE-BNB'
}, {
  id: 'notepaddy',
  title: 'Notepaddy',
  subtitle: 'Een notitie-applicatie gebouwd met C#, WPF, en Dapper',
  when: 2.40,
  category: 'Back-end',
  technologies: ['C#', 'WPF', 'Dapper'],
  description: 'Notepaddy is een eenvoudige notitie-applicatie die notities opslaat in een lokale database. Het was gebouwd met behulp van WPF en Dapper om verbinding te maken met een SQLite-database. Tijdens het ontwikkelen van de applicatie heb ik veel geleerd over C#, WPF, Dapper, en het opzetten van GitHub workflows.',
  mainImageLocation: './projects/notepaddy/main.jpg',
  teamProject: {
    isTeamProject: false,
    team: null,
    text: null
  },
  textSections: [
    {
      title: 'Over Notepaddy',
      description: [
        'Notepaddy is een eenvoudige notitie-applicatie die ik heb gebouwd als case study voor DevOps. Het stelt gebruikers in staat om notities te maken, te bewerken en te verwijderen, die worden opgeslagen in een lokale SQLite-database.',
        'Tijdens het ontwikkelen van Notepaddy heb ik veel geleerd over C#, WPF en Dapper. Het was een geweldige kans om mijn vaardigheden op het gebied van desktopapplicatieontwikkeling te verbeteren en meer te leren over het werken met databases in een desktopomgeving.'
      ],
      imageLocation: './projects/notepaddy/application.jpg'
    },{
      title: 'CI/CD Pipeline',
      description: [
        'Voor Notepaddy heb ik een CI/CD-pijplijn opgezet om het genereren van artifacts te automatiseren.',
        'De CI/CD-pijplijn is geconfigureerd om bij elke commit met een Version tag de applicatie te bouwen vanaf de GitHub-repository, en een artifact te genereren.',
        'Deze artifacts zijn beschikbaar om te downloaden op de GitHub-releases pagina van het project.',
      ],
      imageLocation: './projects/notepaddy/release.jpg',
    }
  ],
  projectHostedUrl: null,
  githubUrl: "https://github.com/BrentSimons/Notepaddy"
},
  {
    id: 'axxess-barometer',
    title: 'Project 4.0',
    subtitle: 'Axxess-barometer voor office occupancy',
    when: 3.5,
    category: 'Front-end',
    technologies: ['Java', 'Spring Boot', 'Angular', 'OAuth2'],
    description: 'Voor Project 4.0 heb ik in team de Axxess Barometer applicatie gemaakt. Deze applicatie dient om te voorspellen hoe vol het kantoor is met door gebruik van AI, zelf heb ik enkel als front/backend developer gewerkt en heb ik niet aan de AI gewerkt. De technologiën waar ik in aanraking kwam waren Angular frontend met Spring Boot backend en Auth0 authenticatie. Dit project hielp me mijn vaardigheden in zowel frontend als backend ontwikkeling verder te ontwikkelen.',
    mainImageLocation: './projects/project4/axxess.jpg',
    teamProject: {
      isTeamProject: false,
      team: null,
      text: null
    },
    textSections: [
      {
        title: 'Project 4.0',
        description: [
          'In het eerste deel van dit project heb ik mij gefocust op het maken van een Spring Boot API met Auth0 authenticatie. Hierbij heb ik geleerd hoe ik vanaf nul met Spring Boot moet werken en heb ik Dockerfiles gemaakt voor deze applicatie om images van zowel de Angular- als de Spring Boot-applicatie te runnen.',
          'Ook heb ik geleerd hoe OAuth2 werkt en me verdiept in Spring Security. Deze kennis stelde me in staat om robuuste en veilige backend services te ontwikkelen.'
        ],
        imageLocation: './projects/project4/spring.jpg'
      },
      {
        title: 'Frontend Herschrijving',
        description: [
          'In het tweede deel van het project heb ik de frontend herschreven. Hiervoor heb ik enkele custom components gemaakt, zoals gauges en cards, en heb ik paginatie en filtering toegevoegd. Deze herschrijving was nodig omdat onze oorspronkelijke designs niet ver genoeg waren uitgewerkt. Om onze klant van Axxes tevreden te stellen, hebben we een herontwerp van de frontend gemaakt.',
          'Deze ervaring heeft me geholpen mijn vaardigheden in frontend ontwikkeling te verbeteren, vooral op het gebied van gebruikerservaring en componentgebaseerde werkmethodologie.'
        ],
        imageLocation: './projects/project4/frontend.jpg'
      }
    ],
    projectHostedUrl: null,
    githubUrl: null
  }, {
    id: 'spring-cookingbook',
    title: 'Spring CookingBook',
    subtitle: 'Een API voor het beheren en delen van kookrecepten, gebouwd met Spring Boot',
    when: 3.67,
    category: 'Back-end',
    technologies: ['Java', 'Spring Boot', 'Flyway', 'Swagger',],
    description: 'CookingBook is een oefening die ik heb gemaakt tijdens een 4-daagse Spring Boot training tijdens mijn stage. Het project dient als een API voor het beheren en delen van kookrecepten. Het is gebouwd met Spring Boot en gebruikt MySQL als database. Het belangrijkste doel van het project was om te leren over Spring Boot en RESTful APIs, maar ook om te leren hoe ik schone, consistente code kan schrijven en best practices kan toepassen.',
    mainImageLocation: './projects/spring-cookingbook/main.jpg',
    teamProject: {
      isTeamProject: false,
      team: null,
      text: null
    },
    textSections: [
      {
        title: 'Clean Code',
        description: [
          'Door deze training ben ik veel te weten gekomen over de opinionated benadering van Spring en de besluitvorming in projecten. Dit betrof keuzes zoals het wel of niet integreren van Lombok en het plaatsen van DTO-conversies in de service of controller.',
          'In het algemeen markeert deze training een belangrijke verandering in mijn codeervaardigheden. De aangeleerde methoden die ik uit deze training heb genomen hebben mij geholpen om mijn code leesbaarder en onderhoudbaarder te maken.'
        ],
        imageLocation: './projects/spring-cookingbook/clean-code.jpg'
      },
      {
        title: 'Arch Unit Tests',
        description: [
          'Een interessant onderwerp dat tijdens de training werd besproken, waren Arch Unit tests. Deze tests kunnen worden geschreven om te controleren of alle componenten correct zijn geplaatst en of de naming conventies binnen je project kloppen.',
          'Tijdens de training hebben we deze technologie nooit aangeraakt, maar later heb ik deze tests ook toegevoegd aan mijn oefenproject, om ervoor te zorgen dat mijn projectarchitectuur consistent en correct is. En om meer te leren over (architecture) tests.'
        ],
        imageLocation: './projects/spring-cookingbook/arch-unit.jpg'
      },
      {
        title: 'Andere Technologieën',
        description: [
          'Tijdens dit project heb ik ook enkele andere technologieën gebruikt. In het begin gebruikte ik H2 databases voor een eenvoudige projectopzet, maar later schakelde we dit over naar MySQL en leerde we Flyway gebruiken voor database-migratie.',
          'Daarnaast heb ik tijdens de training ook geleerd om Swagger te installeren in Spring en om Spring/Javadoc te schrijven. Ook heb ik meer geleerd over Maven en hoe de verschillende commando\'s werken.'
        ],
        imageLocation: './projects/spring-cookingbook/spring-cookingbook-readme.jpg'
      }
    ],
    projectHostedUrl: null,
    githubUrl: 'https://github.com/BrentSimons/spring-CookingBook/'
  }, {
    id: 'restaurant-takeout-app',
    title: 'Restaurant Takeout App',
    subtitle: 'Een teamproject voor een restaurant takeout applicatie met Flutter en Wikitude AR',
    when: 3.1,
    category: 'Front-end',
    technologies: ['Flutter', 'Dart', 'Wikitude', 'AR'],
    description: 'Ik heb een restaurant takeout app gemaakt als onderdeel van de cursus Mobile Development & AR. Het project omvat de ontwikkeling van twee applicaties: één gebouwd met Flutter en de andere met Wikitude. Voor het Flutter gedeelte hebben we een applicatie gemaakt waar klanten het menu van het restaurant kunnen bekijken, maar ook een bestellingen voor takeout kunnen plaatsen en reviews kunnen plaatsen. Voor het AR gedeelte hebben we een scanbare poster gemaakt.',
    mainImageLocation: './projects/restaurant-flutter/review-screen.jpg',
    teamProject: {
      isTeamProject: true,
      team: [
        {
          name: 'Yarin van Raam', linkedIn: 'https://www.linkedin.com/in/yarin-v/'
        }
      ],
      text: {
        title: 'Team Project',
        description: [
          'Dit project was een teaminspanning waarbij ik voornamelijk werkte aan de reviewsectie van de Flutter-app en de gehele AR-app met Wikitude. Samen met mijn teamgenoot Yarin van Raam hebben we een complete takeout oplossing voor een restaurant ontwikkeld.'
        ],
        imageLocation: null
      }
    },
    textSections: [
      {
        title: 'Flutter Review System',
        description: [
          'Voor de Flutter applicatie heb ik een reviewsysteem gemaakt waarmee gebruikers reviews kunnen achterlaten voor het restaurant en individuele gerechten. Ik implementeerde een stercomponent waarmee gebruikers 0-5 sterren kunnen selecteren.',
          'Tijdens dit project heb ik veel geleerd over Flutter en het ontwikkelen van mobiele applicaties. Het was een waardevolle ervaring die me nieuwe vaardigheden en kennis over mobile development opleverde.'
        ],
        imageLocation: './projects/restaurant-flutter/review-submitted.jpg',
      },
      {
        title: 'AR App',
        description: [
          'Ik heb voor dit project ook de AR Wikitude app gemaakt, waarmee gebruikers de gerechten van een poster kunnen scannen en hier meer informatie over kunnen zien. Hoewel Wikitude nu niet meer beschikbaar is, heb ik veel geleerd over AR-concepten tijdens dit project.',
          'Mijn persoonlijke interesse in VR-technologie maakte dit project bijzonder boeiend voor mij. En ook heeft deze ervaring mijn begrip van AR-technologieën en hun toepassingen in de praktijk vergroot.'
        ],
        imageLocation: './projects/restaurant-flutter/wikitude-scan.jpg',
      }
    ],
    projectHostedUrl: null,
    githubUrl: 'https://github.com/BrentSimons/Restaurant-Flutter'
  }, {
    id: 'bachelor-portfolio',
    title: 'Bachelor Portfolio',
    subtitle: 'Een portfolio website voor mijn bachelorproef',
    when: 3.99,
    category: 'Front-end',
    technologies: ['Angular', 'SCSS', 'GitHub Pages'],
    description: 'Voor mijn bachelorproef heb ik een portfolio website gemaakt waarin ik projecten waar ik trots op ben, mijn professioneel profiel, en mijn stage-ervaring presenteer. Deze portfolio laat zien hoe ik gedurende mijn studies geëvolueerd ben als developer.',
    mainImageLocation: './projects/portfolio/main.jpg',
    teamProject: {
      isTeamProject: false,
      team: null,
      text: null
    },
    textSections: [
      {
        title: 'Zelfvertrouwen en Vaardigheden',
        description: [
          'Door het zelf maken van deze portfolio wil ik laten zien hoe ik in de afgelopen drie jaar op school ben geëvolueerd als developer. Aan het begin van mijn studie was ik bang om een dergelijk project aan te pakken, maar aan het einde van mijn studie besloot ik enthousiast om zelf de portfolio te maken in plaats van een template te gebruiken.',
          'Deze ervaring heeft me geholpen mijn zelfvertrouwen en vaardigheden te verbeteren, en heeft me laten zien hoe ver ik ben gekomen in mijn ontwikkeling als softwareontwikkelaar.'
        ],
        imageLocation: './projects/portfolio/skills.jpg',
      },
      {
        title: 'Dynamische Projecten',
        description: [
          'Om het aanmaken van projecten in mijn portfolio eenvoudiger te maken, heb ik een Project object gedefinieerd met TypeScript. Alle projecten die zichtbaar zijn op mijn bachelor-portfolio worden dynamisch gegenereerd op basis van een lijst van deze objecten.',
          'Dit heb ik gedaan om het systeem efficiënter te maken dan bvb aparte bestanden of components voor elk project te maken. Het stelt me ook in staat om beter gebruik te maken van technologieën zoals Angular, wat resulteert in een meer onderhoudbare en uitbreidbare codebasis.'
        ],
        imageLocation: './projects/portfolio/projects.jpg',
      }
    ],
    projectHostedUrl: null,
    githubUrl: 'https://github.com/BrentSimons/bachelor-portfolio'
  }
];
