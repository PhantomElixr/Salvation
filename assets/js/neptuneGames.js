function updateState(state, update){
    console.log('NeptuneGames | Updated gameState to '+state);
    gameState = update;
}

function throwError(code){
    console.log('NeptuneGames | An error occured: '+code);
}