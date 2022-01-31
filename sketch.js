var gameState = 0;

//Menu
var titleSprite, titleImage;
var level1Sprite, level1Image;
var level2Sprite, level2Image;
var level3Sprite, level3Image;
var onlineSprite, onlineImage;
var copyrightSprite, copyrightImage;

//Chat
var chat1Sprite, chat1Image;
var chat2Sprite, chat2Image;
var chatContinueSprite, chatContinueImage;
var chatLaunchSprite, chatLaunchImage;

//Exit
var exitSprite, exitImage;
var exitConfirmSprite, exitConfirmImage;
var exitWarnSprite, exitWarnImage;
var exitCancelSprite, exitCancelImage;

//Game
var rocketGroup, rocketSprite, rocketImage;
var astroidGroup, astroidImage;
var starGroup, starImage;
var earthSprite, earthImage;
var moonSprite, moonImage;
var rocketDistance = 0;
var oxygen = 5;

//End
var failSprite, failImage;
var completeSprite, completeImage;

//Sounds
var clickSound, explodeSound;

function preload(){
  //Menu
  titleImage = loadImage('assets/images/menu/title.png');
  level1Image = loadImage('assets/images/menu/one.png');
  level2Image = loadImage('assets/images/menu/two.png');
  level3Image = loadImage('assets/images/menu/three.png');
  onlineImage = loadImage('assets/images/menu/online.png');
  copyrightImage = loadImage('assets/images/menu/copyright.png');

  //Chat
  chat1Image = loadImage('assets/images/chat/messageOne.png');
  chat2Image = loadImage('assets/images/chat/messageTwo.png');
  chatContinueImage = loadImage('assets/images/chat/continue.png');
  chatLaunchImage = loadImage('assets/images/chat/launch.png')

  //Exit
  exitImage = loadImage('assets/images/exit/button.png');
  exitConfirmImage = loadImage('assets/images/exit/confirm.png');
  exitWarnImage = loadImage('assets/images/exit/warn.png');
  exitCancelImage = loadImage('assets/images/exit/cancel.png');

  //Game
  rocketImage = loadImage('assets/images/game/rocket.png');
  astroidImage = loadImage('assets/images/game/astroid.png');
  starImage = loadImage('assets/images/game/star.png');
  earthImage = loadImage('assets/images/game/earth.png');
  moonImage = loadImage('assets/images/game/moon.png');

  //End
  failImage = loadImage('assets/images/end/fail.png');
  completeImage = loadImage('assets/images/end/success.png');

  //Sounds
  clickSound = loadSound('assets/audio/click.mp3');
  explodeSound = loadSound('assets/audio/explode.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  //Menu
  titleSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 50, 0, 0);
  titleSprite.addImage(titleImage);
  titleSprite.visible = false;

  level1Sprite = createSprite(windowWidth/2 - 100, windowHeight - windowHeight + 200, 0, 0);
  level1Sprite.addImage(level1Image);
  level1Sprite.visible = false;

  level2Sprite = createSprite(windowWidth/2, windowHeight - windowHeight + 200, 0, 0);
  level2Sprite.addImage(level2Image);
  level2Sprite.visible = false;

  level3Sprite = createSprite(windowWidth/2 + 100, windowHeight - windowHeight + 200, 0, 0);
  level3Sprite.addImage(level3Image);
  level3Sprite.visible = false;

  onlineSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 300, 0, 0);
  onlineSprite.addImage(onlineImage);
  onlineSprite.visible = false;

  copyrightSprite = createSprite(windowWidth/2, windowHeight - 50, 0, 0);
  copyrightSprite.addImage(copyrightImage);
  copyrightSprite.scale = 0.5;
  copyrightSprite.visible = false;


  //Chat
  chat1Sprite = createSprite(windowWidth - windowWidth + 150, windowHeight - 100, 0, 0);
  chat1Sprite.addImage(chat1Image);
  chat1Sprite.scale = 0.15;
  chat1Sprite.visible = false;

  chat2Sprite = createSprite(windowWidth - windowWidth + 150, windowHeight - 100, 0, 0);
  chat2Sprite.addImage(chat2Image);
  chat2Sprite.scale = 0.15;
  chat2Sprite.visible = false;

  chatContinueSprite = createSprite(windowWidth - windowWidth + 300, windowHeight - 50, 0, 0);
  chatContinueSprite.addImage(chatContinueImage);
  chatContinueSprite.scale = 0.5;
  chatContinueSprite.visible = false;

  chatLaunchSprite = createSprite(windowWidth - windowWidth + 375, windowHeight - 50, 0, 0);
  chatLaunchSprite.addImage(chatLaunchImage);
  chatLaunchSprite.scale = 0.5;
  chatLaunchSprite.visible = false;

  //Exit
  exitSprite = createSprite(windowWidth - 25, windowHeight - windowHeight + 25, 0, 0);
  exitSprite.addImage(exitImage);
  exitSprite.visible = false;

  exitConfirmSprite = createSprite(windowWidth/2, windowHeight/2 - 150, 0, 0);
  exitConfirmSprite.addImage(exitConfirmImage);
  exitConfirmSprite.visible = false;

  exitWarnSprite = createSprite(windowWidth/2, windowHeight/2 - 300, 0, 0);
  exitWarnSprite.addImage(exitWarnImage);
  exitWarnSprite.scale = 0.75;
  exitWarnSprite.visible = false;

  exitCancelSprite = createSprite(windowWidth/2, windowHeight/2 - 100, 0, 0);
  exitCancelSprite.addImage(exitCancelImage);
  exitCancelSprite.visible = false;


  //Game
  rocketSprite = createSprite(windowWidth/2, windowHeight - 200, 10, 20);
  rocketSprite.addImage(rocketImage);
  rocketSprite.scale = 0.5;
  rocketSprite.visible = false;

  earthSprite = createSprite(windowWidth/2, windowHeight/2 - windowHeight, 0, 0);
  earthSprite.addImage(earthImage);
  earthSprite.visible = false;

  moonSprite = createSprite(windowWidth/2, windowHeight, 0, 0);
  moonSprite.addImage(moonImage);
  moonSprite.visible = false;
  

  //End
  failSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 100);
  failSprite.addImage(failImage);
  failSprite.visible = false;

  completeSprite = createSprite(windowWidth/2, windowHeight - windowHeight + 100);
  completeSprite.addImage(completeImage);
  completeSprite.visible = false;

  //Groups
  astroidGroup = new Group();
  starGroup = new Group();
  rocketGroup = new Group();
}

function draw(){
  background(0);

  if(gameState === 0){
    startMenu();
  } else if(gameState === 0.1){
    startChat1();
  } else if(gameState === 0.2){
    startChat2();
  } else if(gameState === 1){
    level(10000, 20, 60);
  } else if(gameState === 2){
    level(20000, 15, 45);
  } else if(gameState === 3){
    level(30000, 10, 30);
  }

  drawSprites();
}

function starSpawn(speed){
  if(frameCount % speed === 0){
    //Creation
    var starSprite = createSprite(random(windowWidth, windowWidth - windowWidth), windowHeight - windowHeight - 100, 0, 0);
    starSprite.velocityY = random(1,6);   
    starSprite.addImage(starImage); 
    starSprite.scale = 0.004;
    starSprite.lifetime = 500;
    starGroup.add(starSprite);

    //End
    if(rocketDistance > 10000){
      starSprite.velocityY = 0;
    }
  }
}

function astroidSpawn(speed) {
  if(frameCount % speed === 0) {
    //Creation
    var astroidSprite = createSprite(random(windowWidth, windowWidth - windowWidth), windowHeight - windowHeight - 100, 10, 10);
    astroidSprite.velocityY = random(6,12);   
    astroidSprite.addImage(astroidImage); 
    astroidSprite.scale = 0.02;
    astroidSprite.lifetime = 500;
    astroidGroup.add(astroidSprite);

    //End
    if(rocketDistance >= 10000){
      astroidSprite.velocityY = 0;
    }
  }
}