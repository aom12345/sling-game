class Spin {
    constructor(x,y,height,angle) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,20,height,options,angle);
      this.angle=angle;
      Matter.Body.setAngle(this.body,angle);
      this.width = 20;
      this.height =height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(245);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
  };
