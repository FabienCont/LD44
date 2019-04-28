const datasets = [{
  "name":'jobs',
  "scope":"main",
  "source":require("./main/jobs.json"),
  "type":"dataset"
},{
  "name":'questions',
  "scope":"main",
  "source":require("./main/questions.json"),
  "type":"dataset"
}];

export {datasets};
