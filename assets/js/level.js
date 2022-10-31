function level(distance, starSpeed, astroidSpeed){
  var oxygenStat;
  var oxygenX = 100;
  //Menu
  titleSprite.visible = false;
  level1Sprite.visible = false;
  level2Sprite.visible = false;
  level3Sprite.visible = false;
  onlineSprite.visible = false;
  copyrightSprite.visible = false;

  //Chat
  chat1Sprite.visible = false;
  chat2Sprite.visible = false;
  chatContinueSprite.visible = false;
  chatLaunchSprite.visible = false;

  //Exit
  exitSprite.visible = true;

  //Game
  rocketSprite.visible = true;
  moonSprite.visible = true;

  //Rocket
  rocketGroup.add(rocketSprite);
  rocketSprite.depth = rocketSprite.depth + 1;
  rocketSprite.setCollider("rectangle", 0, 0, 200, 400);

  //Moon
	if(moonSprite.y < windowHeight + 200){
		moonSprite.velocityY = 6;
	} else{
		moonSprite.velocityY = 0;
	}
  moonSprite.lifetime = 10;

  //Astroid Collision
  if(rocketGroup.isTouching(astroidGroup)){
    explodeSound.play();
    astroidGroup.destroyEach();
    oxygen = oxygen - 1;
    oxygenX = oxygenX - 20;
  }

  //Oxygen Indicator
  fill('cyan');
  textSize(25);
  text('Oxygen Level: '+oxygen, displayWidth - displayWidth + 25, displayHeight - displayHeight + 25);

  //Oxygen 0
  if(oxygen === 0){
    failSprite.visible = true;
    astroidGroup.destroyEach();
    starGroup.destroyEach();
    rocketGroup.destroyEach();

    if(mousePressedOver(failSprite)){
      updateState('Menu(0)', 0)
      astroidGroup.destroyEach();
      starGroup.destroyEach();
      clickSound.play();
    }
  }

  //Star + Astroid Spawn
  starSpawn(starSpeed);
  astroidSpawn(astroidSpeed);

  //Game Completed
  rocketDistance = rocketDistance + 10;
  if(rocketDistance >= distance){
    completeSprite.visible = true;
    earthSprite.visible = true;

    //Menu Button
    if(mousePressedOver(completeSprite)){
      updateState('Menu(0)', 0)
      astroidGroup.destroyEach();
      starGroup.destroyEach();
      clickSound.play();
    }
    //Earth
    if(earthSprite.y < displayHeight/2){
      earthSprite.y = earthSprite.y + 12;
    }

    //Rocket Landing
    if(rocketSprite.y > displayHeight/2){
      rocketSprite.y = rocketSprite.y - 6;
    }

    if(rocketSprite.x > displayWidth/2){
      rocketSprite.x = rocketSprite.x - 5;
    }

    if(rocketSprite.x < displayWidth/2){
      rocketSprite.x = rocketSprite.x + 5;
    }
  } else{
    //Rocket Controls
    if(keyDown(RIGHT_ARROW)){
      if(rocketSprite.x < displayWidth){
        rocketSprite.x = rocketSprite.x + 5;
      }
    }

    if(keyDown(LEFT_ARROW)){
      if(rocketSprite.x < displayWidth){
        rocketSprite.x = rocketSprite.x - 5;
      }
    }

    //Exit Menu
    if(mousePressedOver(exitSprite)){
      exitSprite.visible = false;
      exitConfirmSprite.visible = true;
      exitWarnSprite.visible = true;
      exitCancelSprite.visible = true;
      clickSound.play();
    }

    //Exit Cancel Key
    if(keyDown(27)){
      exitConfirmSprite.visible = false;
      exitWarnSprite.visible = false;
      exitCancelSprite.visible = false;
    }
    
    //Exit Confirm Key
    if(keyDown(67)){
      exitConfirmSprite.visible = false;
      exitWarnSprite.visible = false;
      exitCancelSprite.visible = false;
      clickSound.play();

      astroidGroup.destroyEach();
      starGroup.destroyEach();
        
      updateState('Menu(0)', 0)
    }
  }
}