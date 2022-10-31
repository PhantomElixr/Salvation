function startMenu(){
  //Menu
  titleSprite.visible = true;
  level1Sprite.visible = true;
  level2Sprite.visible = true;
  level3Sprite.visible = true;
  onlineSprite.visible = true;
  copyrightSprite.visible = false;

  //Chat
  chat1Sprite.visible = false;
  chat2Sprite.visible = false;
  chatContinueSprite.visible = false;
  chatLaunchSprite.visible = false;

  //Exit
  exitSprite.visible = false;
  exitConfirmSprite.visible = false;
  exitWarnSprite.visible = false;
  exitCancelSprite.visible = false;

  //Game
  rocketSprite.visible = false;
  earthSprite.visible = false;
  moonSprite.visible = false;

  //End
  failSprite.visible = false;
  completeSprite.visible = false;

	//Rocket
	rocketSprite.x = windowWidth/2;
	rocketSprite.y = windowHeight - 200;

	//Earth
	earthSprite.x = windowWidth/2;
	earthSprite.y = windowHeight/2 - windowHeight;

  //Moon
  moonSprite.x = windowWidth/2;
	moonSprite.y = windowHeight;
	moonSprite.velocityY = 0;

  //Variable Reset
  oxygen = 5;
  rocketDistance = 0;

  //Level 1 Button
  if(mousePressedOver(level1Sprite)){
    clickSound.play(false);
    updateState('Chat1(0.1)', 0.1);
  }

  //Level 2 Button
  if(mousePressedOver(level2Sprite)){
    clickSound.play(false);
    updateState('Level2(2)', 2);
  }

  //Level 3 Button
  if(mousePressedOver(level3Sprite)){
    clickSound.play(false);
    updateState('Level3(3)', 3)
  }

  if(mousePressedOver(onlineSprite)){
    clickSound.play(false);
    throwError('Online Matchmaking is not available in your region. Please switch to US-CENTRAL.');
  }

	if(mousePressedOver(copyrightSprite)){
		console.log('INFO | Check out our website at https://neptunedevelopment.tk');
	}
}