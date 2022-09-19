noseX=0;
noseY=0;
difference=0;
leftWristx=0;
rightWristx=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#808080');
    fill("#00FF00");
    stroke("#00FFFF");
    square(noseX,noseY,difference);
    document.getElementById("span").innerHTML="Width & Height of the square="+difference+"px";
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX+"noseY="+noseY);
    leftWristx=results[0].pose.leftWrist.x;
    rightWristx=results[0].pose.rightWrist.x;
    difference=floor(leftWristx-rightWristx);
    console.log("leftWristx="+leftWristx+"rightWristx="+rightWristx+"difference="+difference);

}
}
