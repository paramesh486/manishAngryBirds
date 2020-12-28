class Chain{

    constructor(p,q){
     var options={
        bodyA:p,
        bodyB:q
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);

}





}