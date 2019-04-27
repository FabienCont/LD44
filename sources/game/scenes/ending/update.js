import {startAgain} from 'systems/ending/startAgain.js';

function update() {

  // console.log('update ending scene');
  
  this.world.system(['score'], startAgain);

  this.state.inputs.length = 0;

}

export {update};
