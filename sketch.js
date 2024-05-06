var fundo;
var menina;

var limiteX = 300;
var limiteY = 300;


function preload(){
    menina = loadImage("menina-removebg-preview.png");
}

function setup() {
    fundo = createCanvas(300,300);
    meninaSprite = createSprite(15,150);
    meninaSprite.addImage(menina);
    meninaSprite.scale=0.15;
    solo = createSprite(150,302,300,2);
    teto = createSprite(150,0,300,2);
    //meninaSprite.debug=true;
}

function draw() {
    background(0);
    meninaSprite.collide(solo);
    meninaSprite.collide(teto);
    meninaSprite.velocityY=1  ;
    drawSprites();
}






