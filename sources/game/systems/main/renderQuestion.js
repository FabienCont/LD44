function renderQuestion(entity) {

     const questionComponent = entity.get('question');
     const positionComponent = entity.get ('position');
     const hitboxComponent = entity.get ('hitbox');

    this.context.lineWidth = 2;
        this.context.textAlign = 'center';
        this.context.textBaseline = 'middle';
        this.context.font = '16px Courier New';
        this.context.fillStyle = '#d7dae0';
    if(questionComponent.text.length>20){
        var phrases=questionComponent.text.split(' ');
        var middle=Math.ceil(phrases.length/2);
        var phrase1="",phrase2="";
        for(var i=0;i<middle;i++){
          phrase1=phrase1.concat(' ',phrases[i]);
        }
        for(var i=middle;i<phrases.length;i++){
          phrase2=phrase2.concat(' ',phrases[i]);
        }

        this.context.fillText(phrase1, positionComponent.x, positionComponent.y);
       this.context.fillText(phrase2, positionComponent.x, positionComponent.y+30);
    }else this.context.fillText(questionComponent.text, positionComponent.x, positionComponent.y);

}

export {renderQuestion};
