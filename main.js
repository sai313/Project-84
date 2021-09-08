 // Create a reference for the canvas
 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag=new Image();
	img_imgTag.onload=upload;
	img_imgTag.src=img;
}

function upload() {
	ctx.drawImage(img_imgTag,img_x,img_y,img_width,img_height);
}

window.addEventListener("keydown",my_keydown);

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed an alphabet key";
		}else if(keyPressed>=48 && keyPressed<=57){
			numberkey();
			document.getElementById("d1").innerHTML="You pressed symbol or other key";
			console.log("number key");
		}else if(keyPressed>=37 && keyPressed<=40){
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an arrow key";
		}else if((keyPressed==17)||(keyPressed=18)||(keyPressed=27)){
			specialkey();
			document.getElementById("d1").innerHTML="You either pressed CTRL/ALT/ESC";
		}else{
			otherkey();
			document.getElementById("d1").innerHTML="You pressed any other key";
		}
}

function aplhabetkey()
{
	//upload respective image with the message.
	img="Alpkey.png";
	add();
}
function numberkey()
{
	img="numkey.png";
	add();
}
function arrowkey()
{
	img="Arrkey.png";
	add();
}
function specialkey()
{
	img="spkey.png";
	add();
}
function otherkey()
{
	img="otherkey.png";
	add();
}