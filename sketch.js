var gamestate=0;

var form ;
function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20 , displayHeight-140);
  form =new FORM ();
}

 
function draw(){

background("red");


stroke(0,0,0);
textSize(40);
text("PICTURE IDENTIFICATION ",550,170);

 if(gamestate===0){
   form.display();
 }
 if(gamestate===1){
   form.displayoption();
 }
 
}
