import {Project} from "./models/project-card.model";

export const projects: Project[] = [{
  id: "zwemclub",
  title: "Project PHP",
  subtitle: "Groepsproject: zwemclub applicatie maken in Laravel",
  category: 'Front-end',
  when: "year2",
  description: "Tijdens het 2e jaar hebben we een groepsproject gemaakt in Laravel. We hebben een zwemclub applicatie gemaakt, ik heb mij binnen deze applicatie vooral gefocust op het maken van de webshop, maar ook heb ik designs gemaakt en geholpen met het ERD en de back-end.",
  mainImageLocation: "./projects/php-zwemclub/PHP_homepage.png",
}, {
  id: "training",
  title: "C# Training",
  subtitle: "Groepsproject: OOP in C# training aan Wico Campus Neerpeelt",
  category: 'Back-end',
  when: "year2",
  description: "Tijdens het 2e jaar moesten we voor een opdrachtgever een training geven, ik heb hiervoor mijn oude middelbare school gecontacteerd en een training-sessie georganiseerd over OOP in C#. Ook hebben we hiervoor zelf een cursus, oefeningen en presentatie voor gemaakt.",
  mainImageLocation: "./projects/training/training.png"
}]


