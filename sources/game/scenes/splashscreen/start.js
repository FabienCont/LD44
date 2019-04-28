import {Entity, World} from 'modules/world.js';
import {Start} from 'components/splashscreen/start.js';

import * as Ease from 'modules/ease.js';

import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';
import {Force} from 'components/common/force.js';

function start() {

    this.world= new World(this);

    this.world.add(new Entity('start', [
        new Start()
      ]))
      const fallEnding = (entity, elapsed) => {

            entity.add([new Force(0, -100, 1000, Ease.easeOut(5), jumpEnding)]);
            entity.get('force').elapsed += elapsed;
        };

        const jumpEnding = (entity, elapsed) => {

            entity.add([new Force(0, 100, 1000, Ease.easeIn(3), fallEnding)]);
            entity.get('force').elapsed += elapsed;
        };

      this.world.add(new Entity('coin', [
          new Images([{
              'source': this.assets.images.common.coin(),
              'frames': [
                  [0, 0, 100, 100]
              ],
              'frame': 0,
              'destination': [this.size.width/2-36, this.size.height/2, 0, 76, 76]
            }]),
          new Position(0,0,0),
          new Force(0, -100, 1000, Ease.easeOut(5), jumpEnding)
        ]))


    console.log('start splashscreen scene');

    this.state.redirect = false;
}

export {start};
