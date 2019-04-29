function Coin(val,addVal=1) {

    this.name='coin';
    this.val=val;
    this.addVal=addVal;
    this.state=theatre.state;
    this.add=function(){
      this.val=this.val+this.addVal;
      this.state.score.coin.earn+=this.addVal;
    }
    this.decrease=function(price){
      this.val=this.val-price
      this.state.score.coin.loose+=price;
    }
}

export {Coin};
