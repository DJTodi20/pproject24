class Paper{
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:5,
            density:1.5,
            isStatic:false
        }
        this.body=Bodies.circle(x,y,20,options)
  this.radius=20
  World.add(world,this.body)  
}
display(){
    var pos=this.body.position
    push()
    //translate(pos.x,pos.y)
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,20,20)
    pop()

}
}