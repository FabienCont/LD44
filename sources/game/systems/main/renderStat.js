function renderStat(entity) {

     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');
     const statComponent =entity.get('stat');

      var widthStatbar= 70;
      var heightStatbar= 12;
      var marginTop=10;
      var marginRight=10;

      var percent=statComponent.val/statComponent.max;
      var widthStatbarValue=percent*widthStatbar;
      var marginStatbarMarginValue=widthStatbarValue-widthStatbar;
     this.context.fillStyle = 'black';
     this.context.strokeRect(positionComponent.x + hitboxComponent.width-widthStatbar-marginRight, positionComponent.y+marginTop,widthStatbar, heightStatbar);
     this.context.lineWidth = 2;

      if(percent>0.5)
      this.context.fillStyle = 'green';
      else if( percent>0.2)
      this.context.fillStyle = 'yellow';
      else
      this.context.fillStyle = 'red';
      this.context.fillRect(positionComponent.x -marginStatbarMarginValue+ hitboxComponent.width-widthStatbar-marginRight, positionComponent.y+marginTop,widthStatbarValue, heightStatbar);



     this.context.font = '15px Courier New';
      this.context.fillStyle = 'white';
      this.context.textAlign = 'left';
      this.context.textBaseline = 'top';

      this.context.fillText("+"+statComponent.addVal, positionComponent.x+2, positionComponent.y+10);
      this.context.stroke();
}
export {renderStat};
