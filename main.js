//Create a reference for canvas 
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

//Give specific height and width to the car image


greencar_height=150;
greencar_width=80;

redcar_height= 170;
redcar_width= 90;



background_image = "parkingLot.jpg";
greencar_image = "car2.png";
redcar_image = "car1.png";

//Set initial position for a car image.
greencar_x= 1;
greencar_y= 1;

redcar_x= 20;
redcar_y= 425;


function add() {
	//upload car, and background images on the canvas.
	canvas_background= new Image();
	canvas_background.onload= uploadBackground;
	canvas_background.src= background_image;	

    canvas_greencar= new Image();
	canvas_greencar.onload= uploadgreencar;
	canvas_greencar.src= greencar_image;

	canvas_redcar= new Image();
	canvas_redcar.onload= uploadredcar;
	canvas_redcar.src= redcar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(canvas_background,0,0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(canvas_greencar,greencar_x,greencar_y, greencar_width, greencar_height)
	
}

function uploadredcar(){

	ctx.drawImage(canvas_redcar, redcar_x, redcar_y, redcar_width, redcar_height)

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}

		if(keyPressed== '87'){
			up_w();
			console.log("up(w)")
		}

		if(keyPressed== '65'){
			left_a();
			console.log("left(a)")
		}

		if(keyPressed== '83'){
			down_s();
			console.log("down_s)")
		}

		if(keyPressed== '68'){
			right_d();
			console.log("right(d)")
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (greencar_y>=5){
		greencar_y= greencar_y-10;
	uploadBackground();
	uploadgreencar();
	console.log(rover_y);
	}
}

function down()
{
	//Define function to move the car downward
	if (greencar_y<=500){
		greencar_y= greencar_y+10;
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	//Define function to move the car left side
	if (greencar_x>=5){
		greencar_x= greencar_x-10;
		uploadBackground();
		uploadgreencar();    
	}
}

function right()	
{
	//Define function to move the car right side
	if (greencar_x<=700){
		greencar_x= greencar_x+10;
		uploadBackground();
		uploadgreencar();
	}

}

function up_w(){
	if (redcar_y>=5){
		redcar_y= redcar_y-10;
	uploadBackground();
	uploadredcar();
	console.log(rover_y);
	}
}

function left_a(){
	if (redcar_x>=5){
		redcar_x= redcar_x-10;
		uploadBackground();
		uploadredcar();    
	}
}

function down_s(){
	if (redcar_y<=500){
		redcar_y= redcar_y+10;
		uploadBackground();
		uploadredcar();
		
	}
}

function right_d(){
	if (redcar_x<=700){
		redcar_x= redcar_x+10;
		uploadBackground();
		uploadredcar();
	}
}
