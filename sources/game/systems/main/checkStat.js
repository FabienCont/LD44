import {Entity} from 'modules/world.js';

import {Animate} from 'components/main/animate.js';

function checkStat(entity) {

    const statComponent = entity.get('stat');
    const positionComponent = entity.get('position');
    const hitboxComponent = entity.get('hitbox');

    statComponent.elapsed+=this.delta.update
    while (statComponent.elapsed >= statComponent.duration ) {

        statComponent.elapsed -=  statComponent.duration;
        statComponent.decrease();
        var widthmax=positionComponent.x+hitboxComponent.width-35;
        var widthmin=positionComponent.x+35;
        var heightmax=positionComponent.y+hitboxComponent.height-20;
        var heightmin=positionComponent.y+90;
        var randomWidth =Math.floor(Math.random() * (widthmax - widthmin)) + widthmin;
        var randomHeight =Math.floor(Math.random() * (heightmax - heightmin)) + heightmin;
        this.world.add(new Entity('animation', [new Animate( entity.name,randomWidth, randomHeight, "-"+statComponent.decreaseVal)]));

        if(statComponent.val<=0){
          this.load('ending');
        }
      }

}

export {checkStat};
