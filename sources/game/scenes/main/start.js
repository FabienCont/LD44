import {Entity, World} from 'modules/world.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';

import {Text} from 'components/main/text.js';
import {Background} from 'components/main/background.js';
import {Clickable} from 'components/main/clickable.js';
import {Stat} from 'components/main/Stat.js';
import {Coin} from 'components/main/coin.js';
import {Activate} from 'components/main/activate.js';

function start() {

    console.log('start demo scene');

    this.world = new World(this);

    var hunger,sleep,fun,currency,button1,button2,button3,button4={};

    hunger=new Entity('hunger', [
        new Position(0,0),
        new Hitbox(160,195),
        new Background("grey"),
        new Text('Burger','yellow'),
        new Stat('hunger',100,2,5,1,500),
        new Clickable((entity)=>{
          entity.get("stat").add();
          currency.get("coin").buy(entity.get("stat").price)
        }),
        new Activate()
    ]);

    sleep=new Entity('sleep', [
        new Position(160,0),
        new Hitbox(160,195),
        new Background("orange"),
        new Text('ZZZ','black'),
        new Stat('sleep',100,1,1,1,1000),
        new Clickable((entity)=>{
          entity.get("stat").add();
          currency.get("coin").buy(entity.get("stat").price)
        }),
        new Activate()
      ]);

    fun=new Entity('fun', [
        new Position(0,195),
        new Hitbox(160,195),
        new Background("black"),
        new Stat('fun',100,10,20,2,3000),
        new Text('Dance','yellow'),
        new Clickable((entity)=>{
          entity.get("stat").add();
          currency.get("coin").buy(entity.get("stat").price)
        }),
        new Activate()
    ]);

    currency=new Entity('currency', [
        new Position(160,195),
        new Hitbox(160,195),
        new Background("brown"),
        new Coin(100),
        new Text('Work','yellow'),
        new Clickable((entity)=>{
          entity.get("coin").add();
          fun.get("stat").decrease();
        }),
        new Activate()
    ]);

    button1=new Entity('button1', [
        new Position(10,395),
        new Hitbox(140,60),
        new Background("yellow"),
        new Text('Button 1','black'),
        new Clickable((entity)=> console.log(entity.name))
    ]);

    button2=new Entity('button2', [
        new Position(160,395),
        new Hitbox(140,60),
        new Background("red"),
        new Text('Button 2','black'),
        new Clickable((entity)=> console.log(entity.name))
    ]);

    button3=new Entity('button3', [
        new Position(10,465),
        new Hitbox(140,60),
        new Background("green"),
        new Text('Button 2','black'),
        new Clickable((entity)=> console.log(entity.name))
    ]);

    button4=new Entity('button4', [
        new Position(160,465),
        new Hitbox(140,60),
        new Background("orange"),
        new Text('Button 3','black'),
        new Clickable((entity)=> console.log(entity.name))
    ]);
    var entities=[hunger,sleep,fun,currency,button1,button2,button3,button4];
    entities.forEach((entity)=>{this.world.add(entity)});

}

export {start};
