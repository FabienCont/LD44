import {collide} from 'modules/collide.js';
import {Point, Rectangle} from 'modules/shape.js';

function startAgain(entity) {

    this.state.inputs.forEach((input) => {

        if (input.type === 'MOUSE'
        && input.action === 'CLICK_LEFT'
        && input.state === 'DOWN') {

            const mouse = new Point(input.x, input.y);
            const hitbox = new Rectangle(0,0, this.size.width, this.size.height);

            if (collide(mouse, hitbox) === true) {
              this.load('main');
            }
        }
    });
}

export {startAgain};
