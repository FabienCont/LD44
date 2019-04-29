function renderActivationNo(entity) {

    const activate = entity.get('activate');
    const positionComponent = entity.get('position');
    const hitboxComponent = entity.get('hitbox');

    if(!activate){
      this.context.fillStyle = "#282c34cc";
      this.context.fillRect(positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);

    }
}

export {renderActivationNo}
