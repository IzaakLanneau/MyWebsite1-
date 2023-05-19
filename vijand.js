class vijand {
  
  constructor(){
        this.ballx = width/2;
        this.bally = height/2;
        this.bodyColor = color(255, 128, 0);
        this.ballSize = 1;
}
  display(){
    let x = 0;
    let y = 0;
    let bodyheight = 40;
    let bodyweight = 40;

push();
  translate(this.ballx, this.bally);
  scale(this.ballSize);
    
     stroke(0)
            ellipse(x,y, bodyweight, bodyheight);   
pop();
}
}