function render() {

    // console.log('render ending scene');

    this.context.fillStyle = '#181a1f';
    this.context.fillRect(0, 0, this.size.width, this.size.height);

    this.context.font = '16px Courier New';
    this.context.textAlign = 'start';
    this.context.textBaseline = 'top';
    this.context.fillStyle = '#6b717d';
    this.context.fillText('You Loose', 8, 8);
    this.context.fillStyle = '#d7dae0';

    this.context.fillText('click to start Again...', 8, 32);

}

export {render};
