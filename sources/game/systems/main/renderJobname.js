function renderJobname(entity) {

     const jobnameComponent = entity.get('jobname');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

             this.context.textAlign = 'left';
             this.context.textBaseline = 'middle';
             this.context.font = '15px Courier New';
             this.context.fillStyle = '#d7dae0';
    this.context.fillStyle="white";

    this.context.fillText(jobnameComponent.title, positionComponent.x+3, positionComponent.y+hitboxComponent.height-15);


}

export {renderJobname};
