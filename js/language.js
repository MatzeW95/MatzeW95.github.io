//Laguage specific text output (de & en)
//possible language array 
//0 german
//1 english
/*
var langButton = document.getElementById("languageSelection");
var langSelect = 0;

langButton.addEventListener("click", function(){

    updateLanguage(langSelect);

    if (langSelect == 0) {  //language german
        langSelect = 1;
    }
    else if(langSelect == 1) { //language english
        langSelect = 0;
    }
});
*/
const language = {
    german: {
        navFirst: "Wetter",
        navSecond: "Covid 19 Deutschland",
        navThird: "Frontendmentor.io",
        navFourth: "Kontakt",
        heroHeadline: "Meine Projekte",
        linkTextLive: "Live Seite",
        linkTextRepo: "Verzeichnis",
        weatherHeadline: "Wetter",
        weatherDescription: "Diese Webanwendung präsentiert das aktuelle Wetter, sowie eine 7 Tage Vorschau. Sie ist in der Lage den aktuellen Standort auszuwählen, sowie jeden anderen Ort auf der Welt mit Hilfe der zuvor ausgewählten Postleitzahl.",
        covid19Headline: "Covid 19 Deutschland (WIP)",
        covid19Description: "Diese Anwendung zeigt den aktuellen Stand der Covid 19 Pandemie in Deutschland. Mithilfe von täglich aktualisierten Daten vom Robert Koch-Institut kann man zu jedem Zeitpunkt einen guten Überblick über die aktuelle Covid 19 Ausbreitung in Deutschland erhalten.",
        frontendmentorHeadline: "Frontendmentor.io",
        frontendmentorDescriptionOne: "",
        frontendmentorDescriptionTwo: "",
        frontendmentorDescriptionThree: "",
        frontendmentorDescriptionFour: "",
        frontendmentorDescriptionFive: "",
        frontendmentorDescriptionSix: "Hier geht es weiter zum meinem Verzeichnis. Dort gibt es viele weitere bereits abgeschlossene Challenges von Frontendmentor.io."
    },
    english: {}
};

function updateLanguage(languageNumber) {

    var selection = {};

    switch (languageNumber) {
        case 0:
            selection = language.german;
            break;
        case 1:
            selection = language.english;
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
}