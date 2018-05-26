var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gradcol1 = "#299DD5";
var gradcol2 = "#B34D97";

// Sets input buttons to colors of background gradients
color1.value = gradcol1;
color2.value = gradcol2;

// Prints gradient info at initial page load
css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// Sets initial gradient on page load
function initialGradient() {
	body.style.background = "linear-gradient(to right, " + gradcol1 + ", " + gradcol2 + ")";
}

// Sets gradient when a color is picked
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background;
	console.log(css.textContent);
}

// Generates two random hex colors and then sets those as the gradient
function randHex() {
	var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

	var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

	gradcol1 = randomColor1;
	gradcol2 = randomColor2;

	color1.value = gradcol1;
	color2.value = gradcol2;


	console.log("Color 1 is " + randomColor1 + " and Color 2 is " + randomColor2);

	css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

initialGradient();

console.log(css.textContent);


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);