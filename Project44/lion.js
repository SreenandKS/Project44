class Lion{
    constructor(x, y,width,height) {
        // var options = {
        //     'restitution':0.8,
        //     'friction':1.0,
        //     'density':1.0
        // }
        this.body = createSprite(x,y,width,height);
        this.image = loadImage("lion.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
      }
      display(){
       this.body.addImage("rg",this.image);
    //    this.body.collide(ground);
       drawSprites();
      }

      
}