import bnbScreenshot from "../../../assets/projets/bnb.jpg";
import groupomaniaScreenshot from "../../../assets/projets/groupomania.png";
import cinemaxScreenshot from "../../../assets/projets/cinemax.png";
import hotTakesScreenshot from "../../../assets/projets/hot-takes.png";
import kanapScreenshot from "../../../assets/projets/kanap.png";
import ohmyfoodScreenshot from "../../../assets/projets/ohmyfood.jpg";
import bookiScreenshot from "../../../assets/projets/booki.jpg";

const projetcsData = [
    {
        title: "BnB",
        description: "Réalisation d'un clone d'Airbnb",
        image: bnbScreenshot,
        langagues: ["Symfony", "Twig", "PostgreSQL"],
        link: "https://github.com/rAlexandreViegas/BnB",
        category: "Full stack",
    },
    {
        title: "Groupomania",
        description: "Réalisation d'un réseau social d'entreprise",
        image: groupomaniaScreenshot,
        langagues: ["React", "Express.js", "MariaDB"],
        link: "https://github.com/rAlexandreViegas/groupomania",
        category: "Full stack",
    },
    {
        title: "Cinemax",
        description:
            "Réalisation d'une app de recherche de film avec ajout en favoris",
        image: cinemaxScreenshot,
        langagues: ["React"],
        link: "https://github.com/rAlexandreViegas/cinemax",
        category: "Front-end",
    },
    {
        title: "Hot Takes",
        description:
            "Réalisation d'une API sécurisée pour une application d'avis gastronomiques",
        image: hotTakesScreenshot,
        langagues: ["Express.js", "MongoDB"],
        link: "https://github.com/rAlexandreViegas/hot_takes",
        category: "Back-end",
    },
    {
        title: "Kanap",
        description:
            "Réalisation d'un site e-commerce de vente de canapés en JavaScript",
        image: kanapScreenshot,
        langagues: ["JavaScript"],
        link: "https://github.com/rAlexandreViegas/kanap",
        category: "Front-end",
    },
    {
        title: "ohmyfood",
        description:
            "Réalisation d'un site “mobile first” qui répertorie les menus de restaurants gastronomiques",
        image: ohmyfoodScreenshot,
        langagues: ["HTML", "SCSS"],
        link: "https://github.com/rAlexandreViegas/ohmyfood",
        category: "Front-end",
    },
    {
        title: "Booki",
        description:
            "Réalisation d'un site “mobile first” qui répertorie les menus de restaurants gastronomiques",
        image: bookiScreenshot,
        langagues: ["HTML", "CSS"],
        link: "https://github.com/rAlexandreViegas/Booki",
        category: "Front-end",
    },
];

export default projetcsData;
