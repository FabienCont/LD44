function renderCoin(entity) {

     const coinComponent = entity.get('coin');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

     var color ="white";
     this.context.fillStyle = color;
    // this.context.fillRect(positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);

    this.context.textAlign = 'center';
    this.context.font = '18px Courier New';

    this.context.fillStyle = '#d7dae0';
    this.context.textAlign = 'right';
    this.context.textBaseline = 'top';

    this.context.fillText(coinComponent.val, positionComponent.x+hitboxComponent.width-30, positionComponent.y+10);
    this.context.stroke();


    this.context.textAlign = 'left';
    this.context.textBaseline = 'top';

    this.context.fillText("+"+coinComponent.addVal, positionComponent.x+2, positionComponent.y+10);
    this.context.stroke();


}
export {renderCoin};
