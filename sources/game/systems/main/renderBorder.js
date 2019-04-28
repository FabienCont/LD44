function renderBorder(entity) {

     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

        this.context.lineWidth = 1;
        this.context.strokeStyle = "white";
        var margin=5;
        this.context.strokeRect(positionComponent.x+margin, positionComponent.y+margin, hitboxComponent.width-margin*2, hitboxComponent.height-margin*2);



}

export {renderBorder};
