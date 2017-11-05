var balloons = [{
    color: (255, 253, 109),
    posx: 50,
    posy: 50,
    size: 50

}]

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    clear()
    
    
  

 
    for (i = 0; i < balloons.length; i++) {
        fill(balloons[i].color)
        stroke(255)
        ellipse(balloons[i].posx, balloons[i].posy, balloons[i].size)
        stroke(200,200,200)
        line(balloons[i].posx, balloons[i].posy + balloons[i].size/2 , balloons[i].posx, balloons[i].posy + balloons[i].size + 50)
        balloons[i].posy -= (i+ 1) /10
    }
}


function mouseClicked() {
    for (i = 0; i < 5; i++) {
        var balX = Math.floor(Math.random() * windowWidth)
        var balY = windowHeight
        balloons.push(new Balloon("rgb(255,167,225)", balX, balY, 50))
       
    }
    for (i = 0; i < 6; i++) {
        var balX = Math.floor(Math.random() * windowWidth)
        var balY = windowHeight
        balloons.push(new Balloon("rgb(255,252,109)", balX, balY, 45))
    }
     for (i = 0; i < 6; i++) {
        var balX = Math.floor(Math.random() * windowWidth)
        var balY = windowHeight
        balloons.push(new Balloon("rgb(255,54,50)", balX, balY, 48))
     }
     for (i = 0; i < 6; i++) {
        var balX = Math.floor(Math.random() * windowWidth)
        var balY = windowHeight
        balloons.push(new Balloon("rgb(73,234,255)", balX, balY, 52))
     }
      for (i = 0; i < 6; i++) {
        var balX = Math.floor(Math.random() * windowWidth)
        var balY = windowHeight
        balloons.push(new Balloon("rgb(146,255,125)", balX, balY, 46))
     }
        
    console.log(balloons[1].posx)
    // balloon.display()
}
var Balloon = function(color, posx, posy, size) {
    this.color = color;
    this.posx = posx;
    this.posy = posy;
    this.size = size;

}
