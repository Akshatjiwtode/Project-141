music1 = "";
music2 = "";

function preload(){
    music1.loadSound("Faded.mp3");
    music2.loadSound("Coppines.mp3");
    background("#808080");
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();

    video = createCapture(VIDEO)
    video.size(640,480);
    video.center();
    video.hide();

}

function draw(){
    image(video,0,0,640,480);
}