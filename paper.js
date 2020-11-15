class Paperball{
 constructor(x,y){
     var options={
         isStatic: false,
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
     this.body= Bodies.circle(20,600,60,options);
     this.radius=30;
     World.add(world,this.body);
 }

 display(){
    var pos= this.body.position;
    //circleMode(CENTER);
    circle(pos.x,pos.y,this.radius);
    fill("red");
}
keypressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:85})
    }
}
}

