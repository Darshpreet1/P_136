x =0;
y = 0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    canvas = createCanvas(480,500);
    console.log(canvas.width)
    video =  createCapture(VIDEO);
    canvas.position(800,100);
    posenet = ml5.poseNet(video , modelloded);
    posenet.on("pose",gotposes);
}

function draw(){
    background("grey");
    fill("cyan");
    textSize(difference);
    text("Darsh",x,y);
    fill("cyan");
}

function modelloded(){
    console.log("modelloded")
}

function gotposes(result){
    if(result.length > 0 ){
        console.log(result);
        x = result[0].pose.nose.x;
        y = result[0].pose.nose.y;
        leftWrist =  result[0].pose.leftWrist.x;
        rightWrist = result[0].pose.rightWrist.x;
        difference = floor(leftWrist-rightWrist);
    }
}