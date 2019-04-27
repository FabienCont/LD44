function checkStat(entity) {

    const statComponent = entity.get('stat');

    statComponent.elapsed+=this.delta.update
    while (statComponent.elapsed >= statComponent.duration ) {

        statComponent.elapsed -=  statComponent.duration;
        statComponent.decrease();
        if(statComponent.val<=0){
          this.load('ending');
        }
      }

}

export {checkStat};
