import {Mouse} from 'modules/mouse.js';

function setup() {

    console.log('setup ending scene');

    this.state.inputs=[];

    var mouse = new Mouse(this.context.canvas,this.state.inputs);

}

export {setup};
