import {Entity, World} from 'modules/world.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';

import {Question} from 'components/main/question.js';
import {Text} from 'components/main/text.js';
import {Background} from 'components/main/background.js';
import {Clickable} from 'components/main/clickable.js';
import {Activate} from 'components/main/activate.js';
function updateQuestion(entity) {


  const createQuestion=(step)=>{

    var jobs=this.assets.datasets.main.jobs();
    var questions=this.assets.datasets.main.questions();

    var question=questions.filter((question)=> question.id===step)[0];
    var job=jobs.filter((job)=>job.id=== question.callback)[0];
    var nextStep= question.nextStep;
    var text = question.text;

    var questionEntity,yes,no={};
      questionEntity=new Entity('question', [

        new Position(160,410),
          new Hitbox(280,60),
          new Question(text),
      ]);

      yes=new Entity('yes', [
          new Position(60,465),
          new Hitbox(80,60),
          new Background("green"),
          new Text('Yes','black'),
          new Clickable(()=> {
            var mainEntities=this.state.mainEntities;

            var entity=mainEntities.find((entity)=>entity.name===job.type)
            entity.get("jobname").title=job.id;
            if(job.coin){
                var keys=Object.keys(job.coin)
                keys.forEach(key=>{
                  entity.get('coin')[key]=job.coin[key];
                })
            }else if(job.stat){
              var keys=Object.keys(job.stat)
              keys.forEach(key=>{
                entity.get('stat')[key]=job.stat[key];
              })
            }

              if(!job.coin){
                entity.add([
                    new Clickable((entity)=>{
                      entity.get("stat").add();
                      var currency=mainEntities.find((entity)=>{
                        return entity.name==="currency"
                      })
                      currency.get("coin").decrease(entity.get("stat").price);
                      if(job.actions){
                          job.actions.forEach((action)=>{
                            var entityInAction=mainEntities.find((entity)=>{
                              return entity.name===action.type
                            })
                            if(entityInAction.get('coin')) entityInAction.get('coin')[action.nameFunction](action.value);
                            else  entityInAction.get('stat')[action.nameFunction](action.value);
                          })
                      }
                    })
                ])
              }else {
                  entity.add([
                    new Clickable((entity)=>{
                      entity.get("coin").add();
                      if(job.actions){
                          job.actions.forEach((action)=>{
                            var entityInAction=mainEntities.find((entity)=>entity.name===action.type)
                            if(entityInAction.get('coin')) entityInAction.get('coin')[action.nameFunction](action.value);
                            else  entityInAction.get('stat')[action.nameFunction](action.value);
                          })
                      }
                    })
                ])
              }

            this.state.questions.forEach((entity)=>{this.world.remove(entity)});

            createQuestion(question.nextStep);
          })
      ]);

      no=new Entity('no', [
          new Position(180,465),
          new Hitbox(80,60),
          new Background("orange"),
          new Text('No','black'),
          new Clickable(()=>{
              this.state.questions.forEach((entity)=>{this.world.remove(entity)});
                createQuestion(question.nextStep);
          })
      ]);
      this.state.questions=[questionEntity,yes,no];

      this.state.questions.forEach((entity)=>{this.world.add(entity)});

  }
  if(!this.state.questions ){
    createQuestion(this.state.step);
  }

}

export {updateQuestion};
