function Stat(id,val,addVal=1,price=1,decreaseVal=1,duration=500,max=100,actions) {

    this.name='stat';
    this.id=id;
    this.val=val;
    this.max=max;
    this.addVal=addVal;
    this.price=price;
    this.elapsed=0;
    this.duration=duration,
    this.decreaseVal=1;

    this.add=function(addVal){

      if(!addVal)addVal=this.addVal;

      if(this.val+addVal>max){
        this.val=this.max;
      }else this.val=this.val+addVal;
    }

    this.decrease=function(decreaseVal){
      if(!decreaseVal)decreaseVal=this.decreaseVal

      if(this.val-decreaseVal<0){
        this.val=0;
      }else this.val=this.val-decreaseVal;
    }
}

export {Stat};
