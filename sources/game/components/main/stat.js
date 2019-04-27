function Stat(id,val,addVal=1,price=1,decreaseVal=1,duration=500,max=100) {

    this.name='stat';
    this.id=id;
    this.val=val;
    this.max=max;
    this.addVal=addVal;
    this.price=price;
    this.elapsed=0;
    this.duration=duration,
    this.decreaseVal=1;
    this.add=function(){
      if(this.val+this.addVal>max){
        this.val=this.max;
      }else this.val=this.val+this.addVal;
    }

    this.decrease=function(){
      if(this.val-this.decreaseVal<0){
        this.val=0;
      }else this.val=this.val-this.decreaseVal;
    }
}

export {Stat};
