var para = document.getElementById("parallax");
var item = document.getElementsByClassName("parallaxItem");

var parallax1 = document.getElementById("heroHeadline");

para.addEventListener("mousemove", e => {

    var x = e.offsetX;
    var y = e.offsetY;

    console.log(x + y);

    item[0].innerHTML = x;
    item[1].innerHTML = y;

    parallax1.style.top =  35 + y/100*1.5 + "vh";
    parallax1.style.left = 27 + x/100*1.2 + "vw";
});
