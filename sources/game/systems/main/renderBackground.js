function renderBackground(entity) {

     const backgroundComponent = entity.get('background');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');


     this.context.fillStyle = backgroundComponent.color;
     this.context.fillRect(positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);

}
export {renderBackground};
