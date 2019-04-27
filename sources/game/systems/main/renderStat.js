function renderStat(entity) {

     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');
     const statComponent =entity.get('stat');

     var color ="green";
     this.context.fillStyle = color;
    // this.context.fillRect(positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);

    this.context.lineWidth = 2;
    this.context.font="bold 20px Arial";
    this.context.textAlign = 'center';
    this.context.textBaseline = 'top';
    this.context.fillText(statComponent.val, positionComponent.x+hitboxComponent.width-30, positionComponent.y+15);

}
export {renderStat};
