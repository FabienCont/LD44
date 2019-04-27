function renderCoin(entity) {

     const coinComponent = entity.get('coin');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

     var color ="white";
     this.context.fillStyle = color;
    // this.context.fillRect(positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);

    this.context.lineWidth = 2;
    this.context.font="bold 16px Arial";
    this.context.textAlign = 'center';
    this.context.textBaseline = 'top';
    this.context.fillText(coinComponent.val+"$", positionComponent.x+hitboxComponent.width-30, positionComponent.y+15);
    this.context.stroke();


}
export {renderCoin};
