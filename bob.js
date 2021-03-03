class Bob {
    constructor(x,y){
        var options = {
            isStatic: false,
            restitutuion:1,
            friction:0,
            density:7.8,
        }
        this.body = Bodies.circle(x,y,25);
        World.add(world, this.body)

        console.log(this.body);
    }
    display(){
        push()
        ellipseMode(RADIUS)
        FileList(254,0,255)
        ellipse(this.body.position.x,this.body.position.y,25,25)
        pop()

        
    }
}