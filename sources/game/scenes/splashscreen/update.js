import {start} from 'systems/splashscreen/start.js';

import {force} from 'systems/common/force.js';

function update() {

  // console.log('update ending scene');

  this.world.system(['start'], start);
  this.world.system(['position', 'force'], force);


  this.state.inputs.length = 0;

}

export {update};
