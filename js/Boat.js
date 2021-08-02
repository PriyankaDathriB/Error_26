class Boat {
    constructor(x, y, width, height,pos) {
      var options = {
        restitution:0.8,
        density:1.0
      };
      this.boatImage = loadImage("assets/boat.png");
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
      this.posi = pos;
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.boatImage, 0, this.posi, this.width, this.height);
      noTint();
      pop();
    }
  }
  