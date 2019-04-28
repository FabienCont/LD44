function renderJobname(entity) {

     const jobnameComponent = entity.get('jobname');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

    this.context.lineWidth = 2;
    this.context.font="bold 20px Arial";
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle="green";

    this.context.fillText(jobnameComponent.title, positionComponent.x+hitboxComponent.width/2, positionComponent.y+hitboxComponent.height-30);


}

export {renderJobname};
