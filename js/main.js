var button = document.getElementById("navHamburgerMenu");
var menu = document.getElementById("menuMobile");
var main = document.getElementById("navName");
var link = document.getElementsByClassName("navMobile");

link[0].addEventListener("click", function() {
    closeMenu();
})
link[1].addEventListener("click", function() {
    closeMenu();
})
link[2].addEventListener("click", function() {
    closeMenu();
})
link[3].addEventListener("click", function() {
    closeMenu();
})

button.addEventListener("click", function(){

    if (menu.style.display === "block") {
        closeMenu();
    }
    else {
        openMenu();
    }
});

function closeMenu() {
    menu.style.display = "none"; 
    main.style.visibility = "visible";
}

function openMenu() {
    menu.style.display = "block"; 
    main.style.visibility = "hidden";
}