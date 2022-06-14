leftWrist = 0;
rightWrist = 0;
difference = 0;
function setup()
{
    video = createCapture(560, 425);
    video.size(550, 480);

    canvas = createCanvas(560, 425)
    canvas.position(560, 185);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialized!");
}
function draw()
{
    background("#969A97");
    textSize(difference)
    text("Divik", 170, 200);
    fill("#52c771");
    stroke("#52c771");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}