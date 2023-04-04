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
        currencyexchangeHeadline: "Wechselkurs",
        currencyexchangeDescription: "Die Webseite bietet Informationen zum Thema Währungswechsel. Sie zeigt die aktuellen Wechselkurse aller gängigen Währungen zueinander und bietet auch einen historischen Wechselkursverlauf von jeder Währung zum Euro. Die Webseite ermöglicht es Nutzern, sich über aktuelle Wechselkurse zu informieren und ihre Währungsumrechnungen durchzuführen.",
        fuelpriceHeadline: "Spritpreise",
        fuelpriceDescription: "Die Webseite bietet eine umfassende Übersicht über alle geöffneten Tankstellen im Umkreis von 5 km. Benutzer können die aktuellen Spritpreise für Diesel, E5 und E10 einsehen und die Entfernung zur jeweiligen Tankstelle wird automatisch berechnet. Die Webseite verfügt über eine integrierte Routenfunktion, die es Benutzern ermöglicht, die Route zur ausgewählten Tankstelle in Google Maps anzuzeigen. Die benutzerfreundliche Oberfläche ermöglicht es Benutzern, die Ergebnisse nach verschiedenen Kategorien zu sortieren, um schnell und einfach die gewünschten Informationen zu finden.",
        weatherHeadline: "Wetter",
        weatherDescription: "Diese Webanwendung präsentiert das aktuelle Wetter, sowie eine 7 Tage Vorschau. Sie ist in der Lage anhand des aktuellen Standorts oder einer zuvor eingegebenen Postleitzahl das aktuelle Wetter sowie Eine Vorschau für die nächste 7 Tage zu erstellen.",
        frontendmentorHeadline: "Frontendmentor.io",
        frontendmentorDescriptionOne: "Bei dieser Challenge geht es darum mit Hilfe der Flex Funktion möglichst nah an das vorgegebene Original heranzukommen. Um so ein responsives Design für das ganze Projekt zu erstellen.",
        frontendmentorDescriptionTwo: "Bei dieser Challenge geht es darum mit Hilfe der Grid Funktion möglichst nah an das vorgegebene Original heranzukommen. Um so ein responsives Design für das ganze Projekt zu erstellen.",
        frontendmentorDescriptionThree: "Diese Challenge hat zum Ziel ein Formular zu erstellen welches komplett validiert wird bevor die Daten weiter verwendet werden. Und des weiteren zu jedem Zeitpunkt responsive ist.",
        frontendmentorDescriptionFour: "Bei dieser Challenge ging es darum möglichst nah an das vorgegebene Original zu kommen. Und zu dem jeder Zeit responsive ist.",
        frontendmentorDescriptionFive: "Bei dieser Challenge ging es darum einen responsiven IP Tracker zu erstellen, welcher mit Hilfe einer externen API Informationen über die IP Adresse auf einer Karte präsentiert.",
        frontendmentorDescriptionSix: "Hier geht es weiter zu meinem Verzeichnis. Dort gibt es viele weitere bereits abgeschlossene Challenges von Frontendmentor.io.",
        snakeHeadline: "Snake",
        snakeDescription: "Diese Webseite beinhaltet das Spiel Snake. Das Spiel kann mithilfe der Pfeiltasten und der Leertaste gesteuert werden.",
        calculatorHeadline: "Rechner",
        calculatorDescription: "Diese Webseite beinhaltet einen Rechner der in der Lage ist zu addieren, subtrahieren, multiplizieren und zu dividieren. Der Rechner kann mithilfe der Button oder mit der Tastatur gesteuert werden.",
        TicTacToeHeadline: "TicTacToe",
        TicTacToeDescription: "Diese Webseite ist in der Lage das Spiel TicTacToe zu präsentieren. Das Spiel kann mit der Maus oder einer Touchscreen Eingabe gespielt werden.",
        covid19Headline: "Covid 19 Deutschland (veraltet)",
        covid19Description: "Diese Anwendung zeigt den aktuellen Stand der Covid 19 Pandemie in Deutschland. Mithilfe von täglich aktualisierten Daten vom Robert Koch-Institut kann man zu jedem Zeitpunkt einen guten Überblick über die aktuelle Covid 19 Ausbreitung in Deutschland erhalten."
        
    },
    english: {
        navFirst: "Weather",
        navSecond: "Covid 19",
        navThird: "Frontendmentor.io",
        navFourth: "Contact",
        heroHeadline: "My Projects",
        linkTextLive: "Live site",
        linkTextRepo: "Repository",
        currencyexchangeHeadline: "Currency exchange",
        currencyexchangeDescription: "The website provides information on currency exchange. It shows the current exchange rates of all common currencies to each other and also offers a historical exchange rate history of each currency to the euro. The website allows users to learn about current exchange rates and perform their currency conversions.",
        fuelpriceHeadline: "Fuel price",
        fuelpriceDescription: "The website provides a comprehensive overview of all open gas stations within a 5 km radius. Users can view the current fuel prices for diesel, E5 and E10 and the distance to the respective gas station is automatically calculated. The website has an integrated route function that allows users to display the route to the selected gas station in Google Maps. The user-friendly interface allows users to sort the results by different categories to easily find the desired information.",
        weatherHeadline: "Weather",
        weatherDescription: "This web application presents the current weather and a 7-day forecast. It is able to create the current weather and a forecast for the next 7 days based on the current location or a previously entered zip code.",
        frontendmentorHeadline: "Frontendmentor.io",
        frontendmentorDescriptionOne: "This challenge is about using the flex function to get as close as possible to the specified original. And to create the project design responsive.",
        frontendmentorDescriptionTwo: "This challenge is about using the grid function to get as close as possible to the specified original. And to create the project design responsive.",
        frontendmentorDescriptionThree: "The goal of this challenge is to create a form that is fully validated before the data is used further. And furthermore, it is responsive at all times.",
        frontendmentorDescriptionFour: "This challenge was about getting as close as possible to the specified original. And to create the project design responsive.",
        frontendmentorDescriptionFive: "This challenge was about creating a responsive IP tracker that uses an external API to present information about the IP address on a map.",
        frontendmentorDescriptionSix: "Click here to go to my repository. There are many more already completed challenges from Frontendmentor.io.",
        snakeHeadline: "Snake",
        snakeDescription: "This website contains the game Snake. The game can be controlled using the arrow keys and the space bar.",
        calculatorHeadline: "Calculator",
        calculatorDescription: "This website contains a calculator that is capable of adding, subtracting, multiplying and dividing. The calculator can be controlled using the buttons or with the keyboard.",
        TicTacToeHeadline: "TicTacToe",
        TicTacToeDescription: "This website displays the game TicTacToe. The game can be played with a mouse or a touchscreen input.",
        covid19Headline: "Covid 19 Germany (outdated)",
        covid19Description: "This application shows the current status of the Covid 19 pandemic in Germany. With the help of daily updated data from the Robert Koch Institute, you can get a good overview of the current Covid 19 spread in Germany at any time."
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

    document.getElementsByClassName("linkLiveText")[0].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[1].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[2].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[3].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[4].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[5].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[6].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[7].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[8].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[9].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[10].innerHTML = selection.linkTextLive;
    document.getElementsByClassName("linkLiveText")[11].innerHTML = selection.linkTextLive;

    document.getElementsByClassName("linkRepoText")[0].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[1].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[2].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[3].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[4].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[5].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[6].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[7].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[8].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[9].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[10].innerHTML = selection.linkTextRepo;
    document.getElementsByClassName("linkRepoText")[11].innerHTML = selection.linkTextRepo;

    document.getElementById("heroHeadline").innerHTML = selection.heroHeadline;

    document.getElementById("currencyexchangeHeadline").innerHTML = selection.currencyexchangeHeadline;
    document.getElementById("currencyexchangeDescription").innerHTML = selection.currencyexchangeDescription;

    document.getElementById("fuelpriceHeadline").innerHTML = selection.fuelpriceHeadline;
    document.getElementById("fuelpriceDescription").innerHTML = selection.fuelpriceDescription;

    document.getElementById("weatherHeadline").innerHTML = selection.weatherHeadline;
    document.getElementById("weatherDescription").innerHTML = selection.weatherDescription;

    document.getElementById("frontendmentorHeadline").innerHTML = selection.frontendmentorHeadline;
    document.getElementById("frontendmentorDescriptionOne").innerHTML = selection.frontendmentorDescriptionOne;
    document.getElementById("frontendmentorDescriptionTwo").innerHTML = selection.frontendmentorDescriptionTwo;
    document.getElementById("frontendmentorDescriptionThree").innerHTML = selection.frontendmentorDescriptionThree;
    document.getElementById("frontendmentorDescriptionFour").innerHTML = selection.frontendmentorDescriptionFour;
    document.getElementById("frontendmentorDescriptionFive").innerHTML = selection.frontendmentorDescriptionFive;
    document.getElementById("frontendmentorDescriptionSix").innerHTML = selection.frontendmentorDescriptionSix;

    document.getElementById("snakeHeadline").innerHTML = selection.snakeHeadline;
    document.getElementById("snakeDescription").innerHTML = selection.snakeDescription;

    document.getElementById("calculatorHeadline").innerHTML = selection.calculatorHeadline;
    document.getElementById("calculatorDescription").innerHTML = selection.calculatorDescription;

    document.getElementById("TicTacToeHeadline").innerHTML = selection.TicTacToeHeadline;
    document.getElementById("TicTacToeDescription").innerHTML = selection.TicTacToeDescription;

    document.getElementById("covid19Headline").innerHTML = selection.covid19Headline;
    document.getElementById("covid19Description").innerHTML = selection.covid19Description;
}