function Coin(val,addVal=1) {

    this.name='coin';
    this.val=val;
    this.addVal=addVal;
    this.add=function(){
      this.val=this.val+this.addVal;
    }
    this.decrease=function(price){
      this.val=this.val-price
    }
}

export {Coin};
