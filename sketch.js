var ballImg,paddleImg, ball,paddle;
function preload() {
 
  ballImg=loadImage("ball.png");
  paddleImg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(40,200,20,20);
  ball.addImage(ballImg);
  ball.velocityX=9;
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleImg);

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);
  paddle.collide(edges);
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {paddle.y=paddle.y-20;
     
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.y=paddle.y+20;
   
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-8,8);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

