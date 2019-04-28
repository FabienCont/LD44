import {images} from 'systems/common/images.js';

function render() {

    // console.log('render ending scene');

    this.context.fillStyle = '#181a1f';
    this.context.fillRect(0, 0, this.size.width, this.size.height);



    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.font = '20px Courier New';

    this.context.fillStyle = '#d7dae0';
    this.context.fillText('Life is the currency', this.size.width/2, this.size.height/4);
    this.context.font = '16px Courier New';

        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';

        this.context.font = '16px Arial';

    this.context.fillText('insert the coin', this.size.width/2, this.size.height/2+110);

    this.world.system(['images','position'], images);

}

export {render};
