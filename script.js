var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var contain = document.querySelector("#container");
var bg = document.querySelector("body");
var element = document.getElementById("cssStyle");




color1.addEventListener("input",function(){
    var col1 = color1.value;
    var col2 = color2.value;
    bg.style.background = "linear-gradient(to right ,"+col1+" ,"+col2+ " )";
    element.innerHTML = "background : linear-gradient(to right ,"+col1+" ,"+col2+ " )";

})

color2.addEventListener("input",function(){
    var col1 = color1.value;
    var col2 = color2.value;
    bg.style.background = "linear-gradient(to right ,"+col1+" ,"+col2+ " )";
    element.innerHTML = "background : linear-gradient(to right ,"+col1+" ,"+col2+ " )";
})




