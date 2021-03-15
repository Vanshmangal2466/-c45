class FORM {
    constructor() {
   this.button=createButton(' PLAY');
   this.EASY=createButton(' EASY');
   this.MEDIUM=createButton('MEDIUM');
   this.HARD=createButton(' HARD');
}
    display(){
        this.button.position(displayWidth/2 + 30, displayHeight/2);
        this.button.mousePressed(()=>{
         gamestate=1;   
        })

    }
displayoption(){
 this.EASY.position(displayWidth/2,200);
 this.MEDIUM.position(displayWidth/2,300);
 this.HARD.position(displayWidth/2,400);
 this.button.hide();
}
}