var fixedrec,movingrec;
var fixedrec1,movingrec1;

function setup() {
  createCanvas(600,600);
  fixedrec=createSprite(200,200,50,80);
  fixedrec.shapeColor="green";
  movingrec=createSprite(400,200,80,30);
  movingrec.shapeColor="green";

  fixedrec1=createSprite(50,400,50,80);
  fixedrec1.shapeColor="green";
  fixedrec1.velocityX=5;
  movingrec1=createSprite(550,400,80,30);
  movingrec1.shapeColor="green";
  movingrec1.velocityX=-5;

}

function draw()
{
  background(0);
  movingrec.x=World.mouseX;
  movingrec.y=World.mouseY;

if(fixedrec.x-movingrec.x<fixedrec.width/2+movingrec.width/2
  &&movingrec.x-fixedrec.x<fixedrec.width/2+movingrec.width/2
  &&fixedrec.y-movingrec.y<fixedrec.height/2+movingrec.height/2
  &&movingrec.y-fixedrec.y<fixedrec.height/2+movingrec.height/2)
{
  fixedrec.shapeColor="red";
  movingrec.shapeColor="red";

}
else
{
  fixedrec.shapeColor="green";
  movingrec.shapeColor="green";
}

if(fixedrec1.x-movingrec1.x<fixedrec1.width/2+movingrec1.width/2
  &&movingrec1.x-fixedrec1.x<fixedrec1.width/2+movingrec1.width/2)
  {
    fixedrec1.velocityX=fixedrec1.velocityX*(-1);
    movingrec1.velocityX=movingrec1.velocityX*(-1);
  }


  drawSprites();
}


