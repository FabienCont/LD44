import {startAgain} from 'systems/ending/startAgain.js';

import {force} from 'systems/common/force.js';
function update() {

  // console.log('update ending scene');

  this.world.system(['position', 'force'], force);
  this.world.system(['event'], startAgain);

  this.state.inputs.length = 0;

}

export {update};
