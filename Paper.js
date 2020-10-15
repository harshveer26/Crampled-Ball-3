class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.6,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
     // Body.setAngle(this.body, radius);
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius);
      fill("blue");
      stroke("neon");
      //circl(0, 0, this.radius);
      pop();
    }
  };