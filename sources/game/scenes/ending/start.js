import {Entity, World} from 'modules/world.js';
import {Score} from 'components/ending/score.js';


import * as Ease from 'modules/ease.js';
import {Force} from 'components/common/force.js';
import {Images} from 'components/common/images.js';
import {Position} from 'components/common/position.js';
import {Event} from 'components/ending/event.js';

function start() {

    this.world= new World(this);

      this.world.add(new Entity('score', [
        new Score()
      ]))


        const fallEnding = (entity, elapsed) => {

              entity.add([new Force(0, -30, 750, Ease.easeOut(5), jumpEnding)]);
              entity.get('force').elapsed += elapsed;
          };

          const jumpEnding = (entity, elapsed) => {

              entity.add([new Force(0, 30, 750, Ease.easeIn(3), fallEnding)]);
              entity.get('force').elapsed += elapsed;
          };

          this.world.add(new Entity('coin', [
              new Images([{
                  'source': this.assets.images.common.coin(),
                  'frames': [
                      [0, 0, 100, 100]
                  ],
                  'frame': 0,
                  'destination': [29, 59, 0, 25, 25]
                }]),
              new Position(0,0,0)
            ]))

        this.world.add(new Entity('coin', [
            new Images([{
                'source': this.assets.images.common.coin(),
                'frames': [
                    [0, 0, 100, 100]
                ],
                'frame': 0,
                'destination': [this.size.width/2-25, 2*this.size.height/3+20, 0, 50, 50]
              }]),
            new Position(0,0,0),
            new Force(0, -30, 750, Ease.easeOut(5), jumpEnding)
          ]))

          this.world.add(new Entity('coin', [
              new Images([{
                  'source': this.assets.images.common.coin(),
                  'frames': [
                      [0, 0, 100, 100]
                  ],
                  'frame': 0,
                  'destination': [33, 190, 0, 25, 25]
                }]),
              new Position(0,0,0)
            ]))

          this.world.add(new Entity('hunger', [
              new Images([{
                  'source': this.assets.images.common.burger(),
                  'frames': [
                      [0, 0, 300, 300]
                  ],
                  'frame': 0,
                  'destination': [29, 220, 0, 30, 40]
                }]),
              new Position(0,0,0)
            ]))

            this.world.add(new Entity('sleep', [
                new Images([{
                    'source': this.assets.images.common.bed(),
                    'frames': [
                        [0, 0, 200, 200]
                    ],
                    'frame': 0,
                    'destination': [29, 255, 0, 30, 30]
                  }]),
                new Position(0,0,0)
              ]))

                this.world.add(new Entity('social', [
                    new Images([{
                        'source': this.assets.images.common.disco(),
                        'frames': [
                            [0, 0, 300, 300]
                        ],
                        'frame': 0,
                        'destination': [26, 290, 0, 35, 35]
                      }]),
                    new Position(0,0,0)
                  ]))
          setTimeout(()=>{
           this.world.add(new Entity('event', [
             new Event()
            ]))
          },1000);

      console.log('start ending scene');

      this.state.redirect = false;
}

export {start};
