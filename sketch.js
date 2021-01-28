var canvas;
var music;
var surf1,surf2,surf3,surf4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surf1 = createSprite(100,550,200,20);
    surf1.shapeColor = "blue";
    surf2 = createSprite(300,550,200,20);
    surf2.shapeColor = "yellow";
    surf3 = createSprite(500,550,200,20);
    surf3.shapeColor = "purple";
    surf4 = createSprite(700,550,200,20);
    surf4.shapeColor = "green";

    box = createSprite(random (20,750),46,25,25);
    box.shapeColor = "white";
    box.velocityX = 6;
    box.velocityY = 7;

    edges = createEdgeSprites();

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    box.bounceOff(edges);

    if(surf1.isTouching(box) && box.bounceOff(surf1)){
        box.shapeColor = "blue";
        music.play();
    }

    if(surf2.isTouching(box) && box.bounceOff(surf2)){
        box.shapeColor = "yellow";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(surf3.isTouching(box) && box.bounceOff(surf3)){
        box.shapeColor = "purple";
    }

    if(surf4.isTouching(box) && box.bounceOff(surf4)){
        box.shapeColor = "green";
    }



    drawSprites();


    //add condition to check if box touching surface and make it box
}
