class Dustbin{
    constructor(x,y,){
        var options={
         isStatic:true
            
        }
        this.body=Bodies.rectangle (x,y,10,200,options)
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