import {Entity, World} from 'modules/world.js';

import * as Ease from 'modules/ease.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';
import {Images} from 'components/common/images.js';
import {Force} from 'components/common/force.js';

import {Question} from 'components/main/question.js';
import {Text} from 'components/main/text.js';
import {Background} from 'components/main/background.js';
import {Clickable} from 'components/main/clickable.js';
import {Activate} from 'components/main/activate.js';
import {Actions} from 'components/main/actions.js';
import {Border} from 'components/main/border.js';
import {MiniText} from 'components/main/MiniText.js';
function animateGenerator(entity) {

    const animateComponent = entity.get('animate');

    const fallEnding = (entity, elapsed) => {

          entity.add([new Force(0, -75, 1000, Ease.easeOut(5), jumpEnding)]);
          entity.get('force').elapsed += elapsed;
          this.world.remove(entity)
      };

      const jumpEnding = (entity, elapsed) => {

          entity.add([new Force(0, 50, 1000, Ease.easeIn(3), fallEnding)]);
          entity.get('force').elapsed += elapsed;
      };
      var animateTranslate=
      {'currency':{image:'coin','size':{width:100,height:100},'destination': [0, 0, 0, 20, 20]},
      'hunger':{image:'burger','size':{width:300,height:300},'destination': [0, 0, 0, 20, 30]},
      'sleep' :{image:'zzz','size':{width:200,height:200},'destination': [0, 0, 0, 20, 20]},
      'social':{image:'disco','size':{width:300,height:300},'destination': [0, 0, 0, 20, 20]}};
      var related=animateComponent.related
      var image=this.assets.images.common[animateTranslate[related].image]();
      this.world.add(new Entity('animation', [
          new Images([{
              'source': image,
              'frames': [
                  [0, 0, animateTranslate[animateComponent.related].size.width,  animateTranslate[animateComponent.related].size.height]
              ],
              'frame': 0,
              'destination': animateTranslate[animateComponent.related].destination
            }]),
          new Position(animateComponent.x,animateComponent.y,0),
          new MiniText(animateComponent.text),
          new Force(0, -50, 1000, Ease.easeOut(5), jumpEnding)
        ]))

        this.world.remove(entity);
}

export {animateGenerator};
