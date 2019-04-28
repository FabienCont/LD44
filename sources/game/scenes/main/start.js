import {Entity, World} from 'modules/world.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';

import {Question} from 'components/main/question.js';
import {Text} from 'components/main/text.js';
import {Background} from 'components/main/background.js';
import {Clickable} from 'components/main/clickable.js';
import {Stat} from 'components/main/Stat.js';
import {Coin} from 'components/main/coin.js';
import {Activate} from 'components/main/activate.js';
import {Jobname} from 'components/main/jobname.js';

function start() {

    console.log('start demo scene');

    this.world = new World(this);
    this.state.step=0;
    var hunger,sleep,social,currency,questionGenerator={};

    questionGenerator=new Entity('questionGenerator', [
      new Question("first question",function(answer){console.log("answer:"+answer)})
    ]);

    hunger=new Entity('hunger', [
        new Position(0,0),
        new Hitbox(160,195),
        new Background("grey"),
        new Text('Burger','yellow'),
        new Stat('hunger',100,2,5,1,500),
        new Jobname(),
        new Clickable((entity)=>{
          entity.get("stat").add();
          currency.get("coin").decrease(entity.get("stat").price)
        }),
        new Activate()
    ]);

    sleep=new Entity('sleep', [
        new Position(160,0),
        new Hitbox(160,195),
        new Jobname(),
        new Background("orange"),
        new Text('ZZZ','black'),
        new Stat('sleep',100,1,1,1,1000),
        new Clickable((entity)=>{
          entity.get("stat").add();
          currency.get("coin").decrease(entity.get("stat").price)
        }),
        new Activate()
      ]);

    social=new Entity('social', [
        new Position(0,195),
        new Hitbox(160,195),
        new Background("black"),
        new Jobname(),
        new Stat('social',100,10,20,2,3000),
        new Text('Dance','yellow'),
        new Clickable((entity)=>{
          entity.get("stat").add();
          currency.get("coin").decrease(entity.get("stat").price)
        }),
        new Activate()
    ]);

    currency=new Entity('currency', [
        new Position(160,195),
        new Hitbox(160,195),
        new Background("brown"),
        new Coin(100),
        new Jobname(),
        new Text('Work','yellow'),
        new Clickable((entity)=>{
          entity.get("coin").add();
          social.get("stat").decrease();
        }),
        new Activate()
    ]);

    var entities=[hunger,sleep,social,currency];
    this.state.mainEntities=entities;
    var allEntities=[hunger,sleep,social,currency,questionGenerator];

    allEntities.forEach((entity)=>{this.world.add(entity)});

}

export {start};
