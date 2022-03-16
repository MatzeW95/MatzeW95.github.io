//Laguage specific text output (de & en)
//possible language array 
//0 german
//1 english

var langButton = document.getElementById("buttonLanguage");
var langSelect = 0;

langButton.addEventListener("click", function(){

    updateLanguage(langSelect);

    if (langSelect == 0) {  //language german
        langSelect = 1;
        langButton.style.backgroundImage = "url(./img/english.png)";
    }
    else if(langSelect == 1) { //language english
        langSelect = 0;
        langButton.style.backgroundImage = "url(./img/german.png)";
    }
});

const language = {
    german: {
        navFirst: "Wetter",
        navSecond: "Covid 19",
        navThird: "Frontendmentor.io",
        navFourth: "Kontakt",
        heroHeadline: "Meine Projekte",
        linkTextLive: "Live Seite",
        linkTextRepo: "Verzeichnis",
        weatherHeadline: "Wetter",
        weatherDescription: "Diese Webanwendung präsentiert das aktuelle Wetter, sowie eine 7 Tage Vorschau. Sie ist in der Lage anhand des aktuellen Standorts oder einer zuvor eingegebenen Postleitzahl das aktuelle Wetter sowie Eine Vorschau für die nächste 7 Tage zu erstellen.",
        covid19Headline: "Covid 19 Deutschland (WIP)",
        covid19Description: "Diese Anwendung zeigt den aktuellen Stand der Covid 19 Pandemie in Deutschland. Mithilfe von täglich aktualisierten Daten vom Robert Koch-Institut kann man zu jedem Zeitpunkt einen guten Überblick über die aktuelle Covid 19 Ausbreitung in Deutschland erhalten.",
        frontendmentorHeadline: "Frontendmentor.io",
        frontendmentorDescriptionOne: "Bei dieser Challenge geht es darum mit Hilfe der Flex Funktion möglichst nah an das vorgegebene Original heranzukommen. Um so ein responsives Design für das ganze Projekt zu erstellen.",
        frontendmentorDescriptionTwo: "Bei dieser Challenge geht es darum mit Hilfe der Grid Funktion möglichst nah an das vorgegebene Original heranzukommen. Um so ein responsives Design für das ganze Projekt zu erstellen.",
        frontendmentorDescriptionThree: "Diese Challenge hat zum Ziel ein Formular zu erstellen welches komplett validiert wird bevor die Daten weiter verwendet werden. Und des weiteren zu jedem Zeitpunkt responsive ist.",
        frontendmentorDescriptionFour: "Bei dieser Challenge ging es darum möglichst nah an das vorgegebene Original zu kommen. Und zu dem jeder Zeit responsive ist.",
        frontendmentorDescriptionFive: "Bei dieser Challenge ging es darum einen responsiven IP Tracker zu erstellen, welcher mit Hilfe einer externen API Informationen über die IP Adresse auf einer Karte präsentiert.",
        frontendmentorDescriptionSix: "Hier geht es weiter zu meinem Verzeichnis. Dort gibt es viele weitere bereits abgeschlossene Challenges von Frontendmentor.io."
    },
    english: {
        navFirst: "Weather",
        navSecond: "Covid 19",
        navThird: "Frontendmentor.io",
        navFourth: "Contact",
        heroHeadline: "My Projects",
        linkTextLive: "Live site",
        linkTextRepo: "Repository",
        weatherHeadline: "Weather",
        weatherDescription: "This web application presents the current weather and a 7-day forecast. It is able to create the current weather and a forecast for the next 7 days based on the current location or a previously entered zip code.",
        covid19Headline: "Covid 19 Germany (WIP)",
        covid19Description: "This application shows the current status of the Covid 19 pandemic in Germany. With the help of daily updated data from the Robert Koch Institute, you can get a good overview of the current Covid 19 spread in Germany at any time.",
        frontendmentorHeadline: "Frontendmentor.io",
        frontendmentorDescriptionOne: "This challenge is about using the flex function to get as close as possible to the specified original. And to create the project design responsive.",
        frontendmentorDescriptionTwo: "This challenge is about using the grid function to get as close as possible to the specified original. And to create the project design responsive.",
        frontendmentorDescriptionThree: "The goal of this challenge is to create a form that is fully validated before the data is used further. And furthermore, it is responsive at all times.",
        frontendmentorDescriptionFour: "This challenge was about getting as close as possible to the specified original. And to create the project design responsive.",
        frontendmentorDescriptionFive: "This challenge was about creating a responsive IP tracker that uses an external API to present information about the IP address on a map.",
        frontendmentorDescriptionSix: "Click here to go to my repository. There are many more already completed challenges from Frontendmentor.io."
    }
};

function updateLanguage(languageNumber) {

    var selection = {};

    switch (languageNumber) {
        case 0:
            selection = language.english;
            break;
        case 1:
            selection = language.german;
            break;
    }
    
    document.getElementById("navFirst").innerHTML = selection.navFirst;
    document.getElementById("navSecond").innerHTML = selection.navSecond;
    document.getElementById("navThird").innerHTML = selection.navThird;
    document.getElementById("navFourth").innerHTML = selection.navFourth;

    document.getElementsByClassName("navMobile")[0].innerHTML = selection.navFirst;
    document.getElementsByClassName("navMobile")[1].innerHTML = selection.navSecond;
    document.getElementsByClassName("navMobile")[2].innerHTML = selection.navThird;
    document.getElementsByClassName("navMobile")[3].innerHTML = selection.navFourth;

    document.getElementById("liveSiteOne").innerHTML = selection.linkTextLive;
    document.getElementById("liveSiteTwo").innerHTML = selection.linkTextLive;
    document.getElementById("liveSiteThree").innerHTML = selection.linkTextLive;
    document.getElementById("liveSiteFour").innerHTML = selection.linkTextLive;
    document.getElementById("liveSiteFive").innerHTML = selection.linkTextLive;
    document.getElementById("liveSiteSix").innerHTML = selection.linkTextLive;
    document.getElementById("liveSiteSeven").innerHTML = selection.linkTextLive;

    document.getElementById("repositoryOne").innerHTML = selection.linkTextRepo;
    document.getElementById("repositoryTwo").innerHTML = selection.linkTextRepo;
    document.getElementById("repositoryThree").innerHTML = selection.linkTextRepo;
    document.getElementById("repositoryFour").innerHTML = selection.linkTextRepo;
    document.getElementById("repositoryFive").innerHTML = selection.linkTextRepo;
    document.getElementById("repositorySix").innerHTML = selection.linkTextRepo;
    document.getElementById("repositorySeven").innerHTML = selection.linkTextRepo;

    document.getElementById("heroHeadline").innerHTML = selection.heroHeadline;
    
    document.getElementById("weatherHeadline").innerHTML = selection.weatherHeadline;
    document.getElementById("weatherDescription").innerHTML = selection.weatherDescription;

    document.getElementById("covid19Headline").innerHTML = selection.covid19Headline;
    document.getElementById("covid19Description").innerHTML = selection.covid19Description;

    document.getElementById("frontendmentorHeadline").innerHTML = selection.frontendmentorHeadline;
    document.getElementById("frontendmentorDescriptionOne").innerHTML = selection.frontendmentorDescriptionOne;
    document.getElementById("frontendmentorDescriptionTwo").innerHTML = selection.frontendmentorDescriptionTwo;
    document.getElementById("frontendmentorDescriptionThree").innerHTML = selection.frontendmentorDescriptionThree;
    document.getElementById("frontendmentorDescriptionFour").innerHTML = selection.frontendmentorDescriptionFour;
    document.getElementById("frontendmentorDescriptionFive").innerHTML = selection.frontendmentorDescriptionFive;
    document.getElementById("frontendmentorDescriptionSix").innerHTML = selection.frontendmentorDescriptionSix;
}