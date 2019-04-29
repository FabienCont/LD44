import {Entity, World} from 'modules/world.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';
import {Images} from 'components/common/images.js';

import {Question} from 'components/main/question.js';
import {Text} from 'components/main/text.js';
import {Background} from 'components/main/background.js';
import {Clickable} from 'components/main/clickable.js';
import {Stat} from 'components/main/Stat.js';
import {Coin} from 'components/main/coin.js';
import {Activate} from 'components/main/activate.js';
import {Jobname} from 'components/main/jobname.js';
import {MainEntity} from 'components/main/mainEntity.js';
import {Animate} from 'components/main/animate.js';
function start() {

    console.log('start demo scene');

    this.world = new World(this);
    this.state.step=0;
    this.state.score={"coin":{"loose":0,"earn":0},"hunger":{"loose":0,"earn":0},"sleep":{"loose":0,"earn":0},"social":{"loose":0,"earn":0}}
    var hunger,sleep,social,currency,questionGenerator={};

    questionGenerator=new Entity('questionGenerator', [
      new Question("first question",function(answer){console.log("answer:"+answer)})
    ]);

    hunger=new Entity('hunger', [
        new MainEntity(),
        new Position(15,15),
        new Hitbox(145,180),
        new Background("#664e11"),
        //new Text('Burger','yellow'),
        new Stat('hunger',100,2,5,1,800),
        new Jobname(),
        new Images([{
            'source': this.assets.images.common.burger(),
            'frames': [
                [0, 0, 300, 300]
            ],
            'frame': 0,
            'destination': [20, 20, 0, 100, 150]
        },{
            'source': this.assets.images.common.zzz(),
            'frames': [
                [0, 0, 200, 200]
            ],
            'frame': 0,
            'destination': [50, 150, 0, 25, 25]
        },{
            'source': this.assets.images.common.coin(),
            'frames': [
                [0, 0, 100, 100]
            ],
            'frame': 0,
            'destination': [5, 155, 0, 15, 15]
        },{
            'source': this.assets.images.common.disco(),
            'frames': [
                [0, 0, 300, 300]
            ],
            'frame': 0,
            'destination': [100, 153, 0, 20, 20]
        }]),
        new Clickable((entity,x,y)=>{
          this.world.add(new Entity('animation', [new Animate(entity.name,x,y,entity.get("stat").addVal)]));

          this.world.add(new Entity('animation', [new Animate("currency",x+20,y+20,'-'+entity.get("stat").price)]));
          entity.get("stat").add();
          currency.get("coin").decrease(entity.get("stat").price)
        })/*,
        new Activate()*/
    ]);

    sleep=new Entity('sleep', [
        new MainEntity(),
        new Position(160,15),
        new Hitbox(145,180),
        new Jobname(),
        new Background("#246581"),
        new Images([{
            'source': this.assets.images.common.bed(),
            'frames': [
                [0, 0, 200, 200]
            ],
            'frame': 0,
            'destination': [20, 17, 0, 110, 110]
          },{
              'source': this.assets.images.common.burger(),
              'frames': [
                  [0, 0, 300, 300]
              ],
              'frame': 0,
              'destination': [50, 150, 0, 20, 30]
          },{
              'source': this.assets.images.common.coin(),
              'frames': [
                  [0, 0, 100, 100]
              ],
              'frame': 0,
              'destination': [5, 155, 0, 15, 15]
          },{
              'source': this.assets.images.common.disco(),
              'frames': [
                  [0, 0, 300, 300]
              ],
              'frame': 0,
              'destination': [100, 153, 0, 20, 20]
          }]),
        new Stat('sleep',100,1,1,1,1000),
        new Clickable((entity,x,y)=>{
          entity.get("stat").add();
          currency.get("coin").decrease(entity.get("stat").price);
          this.world.add(new Entity('animation', [new Animate(entity.name,x,y,entity.get("stat").addVal)]));

          this.world.add(new Entity('animation', [new Animate("currency",x+20,y+20,'-'+entity.get("stat").price)]));
        })/*,
        new Activate()*/
      ]);

    social=new Entity('social', [

        new MainEntity(),
        new Position(15,195),
        new Hitbox(145,180),
        new Background("#363636"),
        new Jobname(),
        new Stat('social',100,10,20,2,3000),
        new Images([{
            'source': this.assets.images.common.disco(),
            'frames': [
                [0, 0, 300, 300]
            ],
            'frame': 0,
            'destination': [10,15, 0, 110, 110]
          },{

              'source': this.assets.images.common.zzz(),
              'frames': [
                  [0, 0, 200, 200]
              ],
              'frame': 0,
              'destination': [50, 150, 0, 25, 25]
          },{
              'source': this.assets.images.common.coin(),
              'frames': [
                  [0, 0, 100, 100]
              ],
              'frame': 0,
              'destination': [5, 155, 0, 15, 15]
          },{
              'source': this.assets.images.common.burger(),
              'frames': [
                  [0, 0, 300, 300]
              ],
              'frame': 0,
              'destination': [100, 153, 0, 20, 30]
          }]),
        new Clickable((entity,x,y)=>{

          this.world.add(new Entity('animation', [new Animate(entity.name,x,y,entity.get("stat").addVal)]));

                    this.world.add(new Entity('animation', [new Animate("currency",x+20,y+20,'-'+entity.get("stat").price)]));
          entity.get("stat").add();
          currency.get("coin").decrease(entity.get("stat").price)
        })/*,
        new Activate()*/
    ]);

    currency=new Entity('currency', [

        new MainEntity(),
        new Position(160,195),
        new Hitbox(145,180),
        new Background("#ab8d25"),
        new Coin(100),
        new Jobname(),
        new Images([{
            'source': this.assets.images.common.coin(),
            'frames': [
                [0, 0, 100, 100]
            ],
            'frame': 0,
            'destination': [37,35, 0, 75, 75]
          },{
              'source': this.assets.images.common.coin(),
              'frames': [
                  [0, 0, 100, 100]
              ],
              'frame': 0,
              'destination': [120,10, 0, 20, 20]
            },{
                'source': this.assets.images.common.zzz(),
                'frames': [
                    [0, 0, 200, 200]
                ],
                'frame': 0,
                'destination': [50, 150, 0, 25, 25]
            },{
                'source': this.assets.images.common.disco(),
                'frames': [
                    [0, 0, 300, 300]
                ],
                'frame': 0,
                'destination': [100, 153, 0, 23, 23]
            },{
                'source': this.assets.images.common.burger(),
                'frames': [
                    [0, 0, 300, 300]
                ],
                'frame': 0,
                'destination': [5, 155, 0, 20, 30]
            }]),
        new Clickable((entity,x,y)=>{
          this.world.add(new Entity('animation', [new Animate(entity.name,x,y,entity.get("coin").addVal)]));

          entity.get("coin").add();
          social.get("stat").decrease();
        })/*,
        new Activate()*/
    ]);

    var entities=[hunger,sleep,social,currency];
    this.state.mainEntities=entities;
    var allEntities=[hunger,sleep,social,currency,questionGenerator];

    allEntities.forEach((entity)=>{this.world.add(entity)});

}

export {start};
