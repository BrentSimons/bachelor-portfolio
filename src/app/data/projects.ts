import {Project} from "./models/project-card.model";

export const projects: Project[] = [{
  id: "zwemclub",
  title: "Project PHP",
  subtitle: "Groepsproject: zwemclub applicatie maken in Laravel",
  category: 'Front-end',
  when: "year2",
  description: "Tijdens het 2e jaar hebben we een groepsproject gemaakt in Laravel. We hebben een zwemclub applicatie gemaakt, ik heb mij binnen deze applicatie vooral gefocust op het maken van de webshop, maar ook heb ik designs gemaakt en geholpen met het ERD en de back-end.",
  mainImageLocation: "./projects/php-zwemclub/PHP_homepage.png",
  technologies: ["Laravel", "Tailwind"],
  teamProject: {
    isTeamProject: true, team: [{
      name: "Eva Burghoorn (Team leader)", linkedIn: "https://www.linkedin.com/in/eva-burghoorn-432985230/"
    }, {
      name: "Thomas de Ceuster", linkedIn: "https://www.linkedin.com/in/thomas-de-ceuster-329326252/"
    }, {
      name: "Seppe van Eynde", linkedIn: "https://www.linkedin.com/in/seppe-van-eynde-1974bb251/"
    }, {
      name: "Liesa Moors", linkedIn: "https://www.linkedin.com/in/liesa-moors-0b0543251/"
    }, {
      name: "Quinten Bosch", linkedIn: "https://www.linkedin.com/in/quinten-bosch-517472253/"
    }], text: {
      title: "Team Project PHP",
      description: ["Voor dit project hadden we een team van 6 studenten. In het eerste semester hadden we een periode van een week om prototypes van de applicatie te maken, en een ERD uittewerken, in het tweede semester zouden elke week een volle dag op de campus ingepland krijgen om aan dit project werken.", "De samenwerking voor dit team verliep goed, ik heb mij vooral bezig gehouden met het Webshop gedeelte van de applicatie. Dagelijks hadden we een standup meeting in de ochtend, met ook 2 meetings met de klant."],
      imageLocation: null,
    }
  },
  textSections: [{
    title: "Webshop",
    description: ["Voor dit project heb ik vooral aan de webshop gewerkt, dit was de uiteindelijke realisatie."],
    imageLocation: "./projects/php-zwemclub/Webshop.png",
  }],
  projectHostedUrl: null,
}, {
  id: "training",
  title: "C# Training",
  subtitle: "Groepsproject: OOP in C# training aan Wico Campus Neerpeelt",
  category: 'Back-end',
  when: "year2",
  description: "Tijdens het 2e jaar moesten we voor een opdrachtgever een training geven, ik heb hiervoor mijn oude middelbare school gecontacteerd en een training-sessie georganiseerd over OOP in C#. Ook hebben we hiervoor zelf een cursus, oefeningen en presentatie voor gemaakt.",
  mainImageLocation: "./projects/training/training.png",
  technologies: ["Vitepress", "Soft-skills", "Organisational-skills"],
  teamProject: {
    isTeamProject: true, team: [{
      name: "Yarin van Raam", linkedIn: "https://www.linkedin.com/in/yarin-v/"
    }, {
      name: "Wouter Selis", linkedIn: "https://www.linkedin.com/in/wouter-selis/"
    }], text: {
      title: "Team C# Training",
      description: ["Voor deze training hadden we een team van 3 man, mezelf, Yarin en Wouter. Beide ik en Yarin waren oud-studenten van de middelbare school waar we de training zouden geven."],
      imageLocation: null
    },
  },
  textSections: [{
    title: "Organiseren",
    description: ["Voor het organiseren van deze training sessie heb ik contact opgenomen met mijn oude middelbare school Wico Campus Neerpelt. Zodra ik contact had met mijn oude leerkracht hebben we onderwerpen besproken waarover onze training zou kunnen gaan en uiteindelijk gekozen voor OOP in C#", "Hierna heb ik ook het moment van de training geregeld op een moment dat zou passen voor hun en mijn andere teammates. Zodra de training ingepland was heb ik het initiatief genomen om aan de cursus te beginnen en de andere 2 studenten gevraagd om 2 oefeningen voortebereiden die we de volgers van de training gaan laten maken.", "Ook heb ik het vervoer en de benodigde middelen geregeld: o.a. een beamer,  usb sticks, benodigde papieren, een gehostte cursus en met mijn teammates een presentatie voorbereid."],
    imageLocation: "./projects/training/campus-neerpelt.jpg"
  }, {
    title: "Maken van de cursus",
    description: ["Voor een online cursus te maken had ik gekozen om zelf een website hiervoor te maken met een technologie waarachter ik al even nieuwschierig was: Vitepress. Het leren en maken van deze cursus verliep vlotjes, de training werd gegeven aan de leerlingen van 6I&N, maar ik heb later ook nieuws gekregen dat de leerkracht mijn cursus ook heeft gebruikt om OOP aantebrengen aan de leerlingen van 5I&N"],
    imageLocation: "./projects/training/cursus.jpg"
  }, {
    title: "Training",
    description: ["De training zelf is ook vlotjes gelopen, we hebben doorheen het 5e en 6e lesuur de leerlingen van 6I&N aangeleerd hoe ze kunnen beginnen met OOP in C#. Eerst door de presentatie voortebrengen maar daarna door ze de oefeningen in de cursus te laten maken. Tijdens deze applicatie hebben we hun ook gebruik laten maken van Windows Forms als een extra uitdaging."],
    imageLocation: "./projects/training/training.jpg"
  },],
  projectHostedUrl: "https://brentsimons.github.io/CursusCSharp/",
}, {
  id: "20eeuw",
  title: "Website 20e Eeuw",
  subtitle: "Soloproject: Website over de 20e eeuw, gemaakt in Bootstrap, HTML, JS",
  category: 'Front-end',
  when: "year1",
  description: "Tijdens het 1e jaar hebben we een soloproject gemaakt in Bootstrap, HTML en JS. Ik heb een website gemaakt over de 20e eeuw, waarbij ik mij vooral heb gefocust op het design van de website.",
  mainImageLocation: "./projects/20e-eeuw/home-page.jpg",
  technologies: ["Bootstrap", "HTML", "JavaScript"],
  teamProject: {
    isTeamProject: true, team: null, text: {
      title: "Team eeuw 20",
      description: ["Voor dit project had ik een team van 3 man, echter voordat het project gestart werd had een van mijn teammates gestopt met de richting.", "Mijn andere teammate kwam niet naar de les, en heeft ook nooit geholpen met het project."],
      imageLocation: null,
    }
  },
  textSections: [{
    title: "Home Page",
    description: ["Voor dit project heb ik de home page gemaakt. Hierin staat een korte uitleg over de 20e eeuw, dan een voorstelling van mij en mijn teammate, en een uitleg van elke subpagina." + "Ook kan je hier de Navbar en Footer die ik voor dit project hebt gemaakt zien"],
    imageLocation: "./projects/20e-eeuw/home-page.jpg",
  }, {
    title: "Koude oorlog",
    description: ["Voor de subpagina van de koude oorlog heb ik ge-experimenteerd met een accordion object van bootstrap, hier heb ik ook custom styling aan gegeven."],
    imageLocation: "./projects/20e-eeuw/koude-oorlog.jpg"
  }, {
    title: "Val Communisme",
    description: ["Voor de val van communisme subpagina heb ik een custom timeline gemaakt. Hiervoor heb ik een Javascript functie geschreven die berekend hoelang geleden dit evenement is gebeurd en een het card object van bootstrap custom styling gegeven."],
    imageLocation: "./projects/20e-eeuw/val-communisme.jpg"
  }],
  projectHostedUrl: "https://brentsimons.github.io/website-eeuw-20/"
}]


