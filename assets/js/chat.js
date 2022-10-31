function startChat1(){
    //Menu
    titleSprite.visible = false;
    level1Sprite.visible = false;
    level2Sprite.visible = false;
    level3Sprite.visible = false;
    onlineSprite.visible = false;
    copyrightSprite.visible = false;
  
    //Chat
    chat1Sprite.visible = true;
    chat2Sprite.visible = false;
    chatContinueSprite.visible = true;
    chatLaunchSprite.visible = false;

		chat1Sprite.x = windowWidth - windowWidth + 150;
		chat1Sprite.y = windowHeight - 100;

		chatContinueSprite.x = windowWidth - windowWidth + 375;
		chatContinueSprite.y = windowHeight - 50;
  
    //Continue Button
    if(mousePressedOver(chatContinueSprite)){
      clickSound.play(false);
      updateState('Chat2(0.2)', 0.2);
      gameState = 0.2;
    }
}

function startChat2(){
    //Menu
    titleSprite.visible = false;
    level1Sprite.visible = false;
    level2Sprite.visible = false;
    level3Sprite.visible = false;
    copyrightSprite.visible = false;
  
    //Chat
    chat1Sprite.visible = true;
    chat2Sprite.visible = true;
    chatContinueSprite.visible = true;
    chatLaunchSprite.visible = true;
  
    if(chat1Sprite.y > displayHeight - 450){
      chat1Sprite.y = chat1Sprite.y - 10;
    }
  
    if(chatContinueSprite.y > displayHeight - 400){
      chatContinueSprite.y = chatContinueSprite.y - 10;
    }
  
    //Launch Key
    if(keyDown(32)){
      clickSound.play(false);
      updateState('Level 1(1)', 1);
    }
}