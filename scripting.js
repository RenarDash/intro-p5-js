function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
}

function draw() {
    image(video,60,40,200,200);
    r=random(255);
    g=random(255);
    b=random(255);
    fill(r,g,b);
    stroke("black");
    rect(60,40,180,20);
    rect(60,240,180,20)
    rect(40,60,20,180);
    rect(240,60,20,180)
    circle(50,50,30);
    circle(250,50,30);
    circle(250,250,30);
    circle(50,250,30);
}

function take_snapshot() {
    save("contour.png")
}