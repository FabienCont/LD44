import {Entity, World} from 'modules/world.js';

import {Hitbox} from 'components/common/hitbox.js';
import {Position} from 'components/common/position.js';

import {Question} from 'components/main/question.js';
import {Text} from 'components/main/text.js';
import {Background} from 'components/main/background.js';
import {Clickable} from 'components/main/clickable.js';
import {Activate} from 'components/main/activate.js';
import {Actions} from 'components/main/actions.js';
import {Border} from 'components/main/border.js';
import {Animate} from 'components/main/animate.js';

function updateQuestion(entity) {



  const createQuestion=(step)=>{
    this.state.step=step
    var jobs=this.assets.datasets.main.jobs();
    var questions=this.assets.datasets.main.questions();

    var question=questions.filter((question)=> question.id===step);
    if(question.length<1){

        var randomStep =Math.floor(Math.random() * (questions.length-1 - 0)) + 0;

        createQuestion(randomStep);

    }else {
      question=question[0];
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
          new Border (),
          new Text('Yes','black'),
          new Activate(),
          new Clickable(()=> {
            var mainEntities=this.state.mainEntities;

            if(question.callbackType==="job"){
            var job=jobs.filter((job)=>job.id=== question.callback)[0];

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
              if(job.actions){
                entity.add([new Actions(job.actions)]);
              }else entity.remove('actions');
              if(!job.coin){
                entity.add([

                    new Activate(),
                    new Clickable((entity,x,y)=>{

                      this.world.add(new Entity('animation', [new Animate(entity.name,x,y, entity.get("stat").addVal)]));
                      var text=0;
                      if(entity.get("stat").price>0) {
                        text ="-"+entity.get("stat").price;
                        this.world.add(new Entity('animation', [new Animate("currency",x-15,y+20,text)]));
                      }
                      var offset=10;
                      var multiple=-1;

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
                             entityInAction.get('stat')[action.nameFunction](action.value);
                            var text ="";
                            if(action.nameFunction=="decrease"){
                              text+="-";
                            }
                            multiple=multiple*multiple;
                            offset+=offset;
                            this.world.add(new Entity('animation', [new Animate( entityInAction.name,x+(offset*multiple),y+(offset*multiple), action.value)]));
                            })
                      }
                    })
                ])
              }else {
                  entity.add([
                    new Activate(),
                    new Clickable((entity,x,y)=>{
                      entity.get("coin").add();

                      this.world.add(new Entity('animation', [new Animate(entity.name,x,y,entity.get("coin").addVal)]));
                      if(job.actions){
                          var offset=10
                          var multiple=-1;
                          job.actions.forEach((action)=>{
                            var entityInAction=mainEntities.find((entity)=>entity.name===action.type)
                            if(entityInAction.get('coin')) entityInAction.get('coin')[action.nameFunction](action.value);
                            else  entityInAction.get('stat')[action.nameFunction](action.value);
                            var text ="";
                            if(action.nameFunction=="decrease"){
                              text+="-";
                            }

                            multiple=multiple*multiple;
                            offset+=offset;
                            this.world.add(new Entity('animation', [new Animate( entityInAction.name,x+(offset*multiple),y+(offset*multiple), action.value)]));

                          })
                      }
                    })
                ])
              }
            }
            this.state.questions.forEach((entity)=>{this.world.remove(entity)});

            createQuestion(question.nextStep);
          })
      ]);
      no=new Entity('no', [
          new Position(180,465),
          new Hitbox(80,60),
          new Border (),
          new Text('No','black'),
          new Clickable(()=>{
              this.state.questions.forEach((entity)=>{this.world.remove(entity)});
                createQuestion(question.nextStep);
          })
      ]);

      if(!question.forceYes){
        no.add([new Activate()]);
      }

      this.state.questions=[questionEntity,yes,no];

      this.state.questions.forEach((entity)=>{this.world.add(entity)});
    }
  }
  if(!this.state.questions && !this.state.step){

    var questions=this.assets.datasets.main.questions();
    createQuestion(questions[0].id);
//    createQuestion(this.state.step);
  }


}

export {updateQuestion};
