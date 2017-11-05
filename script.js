var balloon={
    color:"red",
    posx:50,
    posy:50,
    size:20,
    speedX:10,
    speedY:10
}

function setup() {
createCanvas(windowWidth, windowHeight)
}
function draw() {
    balloon(bal,posx,posy,211,211)
    posx=posx+speedx
    posy=posy+speedy
    noFill()
    fill(255,255,160)
  triangle(75, 230, 100, 205, 125, 230)
    ellipse(100, 155, 100, 110)
    noFill()
    curve(60, 30, 100, 232, 100, 400, 300, 400)
    line(balloon.posx,balloon.posy+balloon.size/2, balloon.posx,balloon.posy+balloon.size+50)
    balloon.posy-=1
    
}
function mouseMoved(){

var balX= mouseX
var balY= mouseY
balloon= new Balloon("rgb(255,0,0)",20,40,10)
console.log(balloon)
//balloon.display()
}
   var Balloon= function (color,posx,posy,size){
       this.color= (255,0,0);
       this.posx=100;
       this.posy=100;
       this.size=200;
   };