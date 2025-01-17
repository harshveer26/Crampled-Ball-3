class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          'isStatic' :true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image = loadImage("sprites/dustbingreen.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      //fill("red");
      //stroke("black");
      //strokeWeight(3);
      //rect(0, 0, this.width, this.height);
      pop();
    }
  };
  