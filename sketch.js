var cat,cat_Moving,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var garden,gardenImg;
function preload() {
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation ("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(770,600,20,20);
    cat.addAnimation("catImg1",catImg1);
    cat.scale=0.2;
    mouse = createSprite(200,600,20,20);
    mouse.addAnimation("mouseImg1",mouseImg1);
    mouse.scale=0.1;

}

function draw() {

    background(gardenImg);
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("catImg3",catImg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catImg3",catImg3);
        mouse.addAnimation("mouseImg3",mouseImg3);
        mouse.scale=0.1;
        mouse.changeAnimation("mouseImg3",mouseImg3);
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("cat_Moving",catImg2);
        cat.changeAnimation("cat_Moving",catImg2);
        mouse.addAnimation("mouseImg2",mouseImg2);
        mouse.changeAnimation("mouseImg2",mouseImg2);
    }



}
