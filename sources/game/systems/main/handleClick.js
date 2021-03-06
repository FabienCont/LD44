import {collide} from 'modules/collide.js';
import {Point, Rectangle} from 'modules/shape.js';

function handleClick(entity) {

    const clickComponent = entity.get('clickable');
    const positionComponent = entity.get('position');
    const hitboxComponent = entity.get('hitbox');

    this.state.inputs.forEach((input) => {

        if (input.type === 'MOUSE'
        && input.action === 'CLICK_LEFT'
        && input.state === 'DOWN') {

            const mouse = new Point(input.x, input.y);
            const hitbox = new Rectangle(positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);

            if (collide(mouse, hitbox) === true) {

                  this.state.inputs.length = 0;
                clickComponent.action(entity,input.x, input.y);

            }
        }
    });
}

export {handleClick};
