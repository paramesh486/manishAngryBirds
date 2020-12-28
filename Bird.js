class Bird {
    constructor(m, a,n,i) {
      var order1 = {
      
        restitution:1,
        density:1.5,
        friction: 1.0
      }
      this.body= Bodies.rectangle(m, a, n, i, order1);
    
      World.add(world, this.body);
      this.width = n;
      this.height = i;
    }
    display(){
      this.body.position.x=mouseX
      this.body.position.y=mouseY
      push ();
     translate(this.body.position.x,this.body.position.y) 
     rotate (this.body.angle)
     rectMode(CENTER)
      fill  ("red")  
     rect(0,0,this.width,this.height)
     pop ();
 
    }
  };
  