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
        heroHeadline: "Meine Projekte"
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

    document.getElementById("heroHeadline").innerHTML = selection.heroHeadline;
}