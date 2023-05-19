class robot {
  
  constructor(){
        this.xPos = width/2;
        this.yPos = height/2;
        this.hairColor = color(0);
        this.bodyColor = color(255, 128, 0);
        this.robotSize = 1;
}
  display(){
    let x = 200;
    let y = 200;
    let bodyheight = 300;
    let Y = bodyheight-120-10 //lengte benen 

push();
  translate(this.xPos, this.yPos);
  scale(this.robotSize);
    
     stroke(0)
      // ONDERSTE BENEN 
          strokeWeight(2)
          fill(220)
          triangle(150, 100, 200, 150, 120, y+Y)
          triangle(250, 100, 200, 150, 280, y+Y)
      // VOETEN  
          strokeWeight(3)
          fill(255, 255, 0)
          ellipse(100, y+Y, 100, 20)
          ellipse(300, y+Y, 100, 20)
      // ARMEN   
          strokeWeight(2)
          fill(60)
          quad(150, 120, 200, 150, 50, 180, 45, 175)
          quad(250, 120, 200, 150, 350, 180, 355, 175)
     // HANDEN      
          strokeWeight(3)
          fill(255, 255, 0)
          arc(45, 175, 30, 30, PI, TWO_PI + HALF_PI)
          arc(355, 175, 30, 30, TWO_PI + HALF_PI, 0)
     // BODY     
          fill(this.bodyColor)
          triangle(100, 100, x, y , 300, 100)
     // WIT VAN DE OGEN     
          fill(250)
          ellipse(165, 125, 40, 40)
          ellipse(235, 125, 40, 40)
     //MOND     
          fill(0)
          arc(200, 155, 80, 10, PI, 0)
          arc(200, 155, 40, 20, 0, PI)
    //OOG ZWART LINKS
          ellipse(170, 130, 25)
    //WITTE FONEKLING IN OOG LINKS
          fill(250)
          ellipse(172, 122, 5)
    //RODE PUNT IN OOG LINKS
          fill(255, 0, 0)
          ellipse(170, 130, 10)
    //OOG ZWART RECHTS      
          fill(0)
          ellipse(240, 130, 25)
    //WITTE FONKELING IN OOG RECHTS      
          fill(250)
          ellipse(242, 122, 5)
    //RODE PUNT IN OOG RECHTS      
          fill(255, 0, 0)
          ellipse(240, 130, 10)
    //WENKBRAUWEN      
          fill(this.hairColor)
          quad(120, 80, 180, 105, 180, 95, 130, 80)
          quad(280, 80, 220, 105, 220, 95, 270, 80)
    
pop();
}
}