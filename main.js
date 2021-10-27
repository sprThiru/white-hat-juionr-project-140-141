rightWristY = 0;
rightWristX = 0;

function setup()
{
canvas = createCanvas(550,450);
canvas.center();

video = createCapture(VIDEO);
video.size(550, 450);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function draw()
{
  background(0); 
  image(video,0,0,550,450);

  }

function modelLoaded() 
{
  console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
  if(results.length > 0)
  {

    rightWristY = results[0].pose.rightWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    scoreRightWrist =  results[0].pose.keypoints[10].score;
    console.log("rightWristX = " + rightWristX + " , rightWristY = "+rightWristY);
  }
}
