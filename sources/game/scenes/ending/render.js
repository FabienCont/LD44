import {images} from 'systems/common/images';
function render() {

    // console.log('render ending scene');

        this.context.fillStyle = '#444444';
        this.context.fillRect(0, 0, this.size.width, this.size.height);
        this.context.strokeStyle = "black";
        this.context.strokeRect(0, 0, this.size.width, this.size.height);
        this.context.lineWidth = 2;


        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.font = '20px Courier New';

        this.context.fillStyle = '#d7dae0';
        this.context.fillText('Life is the currency', this.size.width/2, this.size.height/6-15);

        this.context.font = '15px Courier New';

        this.context.fillText('You are Dead!', this.size.width/2, this.size.height/6+15);


                this.context.textAlign = 'left';
                this.context.textBaseline = 'middle';
        this.context.fillText('Score total:', 15, this.size.height/4+20);
        //this.state.score.coin
        this.context.fillText(': lost '+this.state.score.coin.loose+', earn '+this.state.score.coin.earn, 62, this.size.height/4+70);
        this.context.fillText(': lost '+this.state.score.hunger.loose+', earn '+this.state.score.hunger.earn, 62, this.size.height/4+105);
        this.context.fillText(': lost '+this.state.score.sleep.loose+', earn '+this.state.score.sleep.earn, 62, this.size.height/4+140);
        this.context.fillText(': lost '+this.state.score.social.loose+', earn '+this.state.score.social.earn, 62, this.size.height/4+176);

        this.context.font = '16px Courier New';

            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';

            this.context.font = '16px Arial';

                this.context.fillText('Click to', this.size.width/2, 2*this.size.height/3+90);
        this.context.fillText('insert the coin', this.size.width/2, 2*this.size.height/3+110);

        this.world.system(['images','position'], images);


}

export {render};
