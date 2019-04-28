import {renderText} from 'systems/main/renderText.js';
import {renderQuestion} from 'systems/main/renderQuestion.js';
import {renderBackground} from 'systems/main/renderBackground.js';
import {renderCoin} from 'systems/main/renderCoin.js';
import {renderStat} from 'systems/main/renderStat.js';

import {renderJobname} from 'systems/main/renderJobname.js';

function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#d7dae0';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.world.system(['background','hitbox','position'], renderBackground);
    this.world.system(['text','position'], renderText);
    this.world.system(['question','position'], renderQuestion);
    this.world.system(['background','stat','hitbox','position'], renderStat);
    this.world.system(['background','coin','hitbox','position'], renderCoin);
    this.world.system(['jobname','hitbox','position'], renderJobname);


}

export {render};
