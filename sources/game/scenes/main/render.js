import {renderText} from 'systems/main/renderText.js';
import {renderQuestion} from 'systems/main/renderQuestion.js';
import {renderBackground} from 'systems/main/renderBackground.js';
import {renderCoin} from 'systems/main/renderCoin.js';
import {renderStat} from 'systems/main/renderStat.js';
import {renderActions} from 'systems/main/renderActions.js';
import {renderJobname} from 'systems/main/renderJobname.js';
import {renderBorder} from 'systems/main/renderBorder.js';

import {renderMiniText} from 'systems/main/renderMiniText.js';


import {images} from 'systems/common/images.js';


function render() {

    // console.log('render demo scene');

    this.context.fillStyle = '#444444';
    this.context.fillRect(0, 0, this.size.width, this.size.height);
    this.context.strokeStyle = "black";
    this.context.strokeRect(0, 0, this.size.width, this.size.height);

    this.world.system(['background','hitbox','position'], renderBackground);
    this.world.system(['text','position'], renderText);
    this.world.system(['question','position'], renderQuestion);
    this.world.system(['images','position'], images);
    this.world.system(['background','stat','hitbox','position'], renderStat);
    this.world.system(['background','coin','hitbox','position'], renderCoin);
    this.world.system(['jobname','hitbox','position'], renderJobname);
    this.world.system(['mainEntity','hitbox','position'], renderActions);
    this.camera.render();
    this.world.system(['minitext','position'], renderMiniText);

    this.world.system(['border','hitbox','position'], renderBorder);




}

export {render};
