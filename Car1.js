class Car1 {

    constructor (x,y,width,height) {

      
        this.body = Bodies.rectangle (x,y,width,height);
        this.width = width;
        this.height = height;
        world.add(world,this.body)

        }

        display (){

            rectMode(CENTER);
            rect(this.body.positionx,this.body.positiony,this.width,this.height)
            

        }
    
}