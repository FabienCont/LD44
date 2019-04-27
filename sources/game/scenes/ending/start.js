import {Entity, World} from 'modules/world.js';
import {Score} from 'components/ending/score.js';

function start() {

    this.world= new World(this);

    this.world.add(new Entity('score', [
        new Score()
      ]))

    console.log('start ending scene');

    this.state.redirect = false;
}

export {start};
