import {handleClick} from 'systems/main/handleClick.js';
import {checkStat} from 'systems/main/checkStat.js';
import {checkCoin} from 'systems/main/checkCoin.js';

function update() {

    // console.log('update demo scene');
    this.world.system(['stat','activate'], checkStat);
    this.world.system(['coin','activate'], checkCoin);

    this.world.system(['hitbox','position','clickable'], handleClick);

    this.state.inputs.length = 0;

}

export {update};
