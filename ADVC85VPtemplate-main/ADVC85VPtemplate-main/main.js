//Create a reference for canvas 
canvas=documentgetElementById("myCanvas")
ctx=canvas.getContext("2d")

//Give specific height and width to the car image
greencar_width =75
greencar_height=100
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_y=5
greencar_x=225
function add() {
	background_imageTag= new Image()
	background_imageTag.onload= uploadBackground;
	background_imageTag.src=background_image;

	greencar_imageTag= new Image()
	greencar_imageTag.onload= uploadreencar;
	greencar_imageTag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imageTag, 0,0, cavas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.

	ctx.drawImage(greencar_imageTag, greencar_x , greencar_y, 0,0, cavas.width, canvas.height);
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
	if (greencar_y >=0)
	{
		greencar_y=greencar_y-10
	console.log("When up arrow is pressed,x=" + greencar_x+"I y=" + greencar_y);
	uploadBackground();
	uploadgreencar();
	}
	//Define function to move the car upward
}

function down()
{
	if (greencar_y <=500)
	{
		greencar_y=greencar_y+10
	console.log("When down arrow is pressed,x=" + greencar_x+"I y=" + greencar_y);
	uploadBackground();
	uploadgreencar();
	}
	//Define function to move the car downward
}

function left()
{
	if (greencar_x <=0)
	{
		greencar_y=greencar_y-10
	console.log("When up arrow is presses,y=" + greencar_y+"I x=" + greencar_x);
	uploadBackground();
	uploadgreencar();
	}
	//Define function to move the car left side
}

function right()
{
	if (greencar_x >=500)
	{
		greencar_y=greencar_y+10
	console.log("When up arrow is presses,y=" + greencar_y+"I x=" + greencar_x);
	uploadBackground();
	uploadgreencar();
	}
	//Define function to move the car right side
}
