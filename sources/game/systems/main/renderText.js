function renderText(entity) {

     const textComponent = entity.get('text');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

    this.context.lineWidth = 2;
    this.context.font="bold 20px Arial";
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle=textComponent.color;
    if(hitboxComponent){
      this.context.fillText(textComponent.text, positionComponent.x+hitboxComponent.width/2, positionComponent.y+hitboxComponent.height/2);
    }else{
      this.context.fillText(textComponent.text, positionComponent.x, positionComponent.y);
    }

}

export {renderText};
