import {Mouse} from 'modules/mouse.js';

function setup() {

    this.state.inputs=[];
    console.log('setup demo scene');
    var mouse = new Mouse(this.context.canvas,this.state.inputs);
}

export {setup};
