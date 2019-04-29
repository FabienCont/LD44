function renderMiniText(entity) {

     const textComponent = entity.get('minitext');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

        this.context.textAlign = 'right';
        this.context.textBaseline = 'top';
        this.context.font = '18px Courier New';
        this.context.fillStyle = 'black';
        if(textComponent.text.length>0 && textComponent.text[0]==="-"){
          this.context.fillStyle="#bd1900";
        }
        this.context.fillText(textComponent.text, positionComponent.x, positionComponent.y);


}

export {renderMiniText};
