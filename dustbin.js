class Dustbin {
        constructor(x,y,width,height) {
        var options = {
        isStatic: true
}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
}
      display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        strokeWeight(4);
        fill(255);
        rect(pos.x,pos.y ,this.width, this.height);
        pop();
}

}



// 1200,250 (right side) D1
// 950,250(left side)D2
// 1075,334(middle)D3