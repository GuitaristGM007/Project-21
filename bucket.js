class bucket{
constructor(x, y, w,h){
let options = {
isStatic : true
};
this.body = Bodies.rectangle(x, y, w, h, options);
this.w = w;
this.h = h;
World.add(worlds,this.body);
}
display(){
var place = this.body.position;
push();
rectMode(CENTER);
stroke(255);
fill(127);
rect(place.x, place.y, this.w, this.h);
pop();
}
}