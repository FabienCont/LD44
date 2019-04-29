function renderActions(entity) {

     const actionsComponent = entity.get('actions');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

    this.context.textAlign = 'left';
    this.context.textBaseline = 'middle';
    this.context.font = '15px Courier New';
    this.context.fillStyle="white";
    var positionText=[25,75,120];
    var entities=["currency","hunger","sleep","social"];

    entities=entities.filter(mainEntityName=>entity.name!==mainEntityName);

    entities.forEach((mainEntityName)=>{
        var value=0;
        var actionsMatch=[];
        if(actionsComponent){
          actionsMatch =actionsComponent.actionsJson.filter((action)=>action.type===mainEntityName);
        }
        if(actionsMatch.length>0){
          var action=actionsMatch[0];
          if(action.nameFunction==="decrease"){

            this.context.fillStyle="red";
              value="-";
          }else if(action.nameFunction==="add"){
              value="+";
          }
          value+=action.value;
        }

        if(mainEntityName==="currency"){
          value=entity.get('stat').price;
        }
        var position=positionText.shift();
        this.context.fillText(value, positionComponent.x+position, positionComponent.y+hitboxComponent.height-15);

    })
}

export {renderActions};
