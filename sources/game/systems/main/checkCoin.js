function checkCoin(entity) {

    const coinComponent = entity.get('coin');

    if(coinComponent.val<=0){
      this.load('ending');
    }

}

export {checkCoin};
