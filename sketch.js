
function average(){
var weights = [85,89,70,60,65,69];
var sum = weights[0]+weights[1]+weights[2]+weights[3]+weights[4]+weights[5]
var avg = sum/weights.length
  console.log(avg)
}

function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
background(51);
average();
}

