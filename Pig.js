class Pig{
    constructor(m,a,n,i){
     var order1={
         restitution:1
     }
     
        this.pig=Bodies.rectangle(m,a,n,i,order1)
     World.add(world,this.pig)
   
     this.width=n
     this.height=i
    }
    
    display(){
       
        strokeWeight(4)
        stroke("orange")
        fill  ("green")  
        rect(this.pig.position.x,this.pig.position.y,this.width,this.height)
    
    }
    
    
    
    }