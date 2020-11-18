class Ground{
    constructor(x,y,width,height){
        var options={
         isStatic:true
        }
        this.body=Bodies.rectangle (x,y,this.width,this.height,options)
    this.width=800
this.height=20
World.add(world,this.body)
}
display(){

    var pos = this.body.position
    push()
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    pop()
}
}