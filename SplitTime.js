const objectToSplitTime = {
  time: "2019-12-30 18:14:40.000",
  recipe: 10015793020,
  workOrder: 12345678,
  minWall: 0.02371,
  maxWall: 0.02404,
  avgWall: 0.0239,
  concen: 98.6,
  ID: 0.1452,
  OD: 0.19299,
  minOD: 97.9,
  maxOD: 0.1947,
  lineSpeed: 30.07,
  length: 11774.85,
  waterTemp: 72.3,
  IDVar: -0.00081,
  ODVar: -0.0015,
  wallVar: -0.0001
};

const splitTime = obj => {
  
  const dateTime = Object.entries(obj)[0][1].split(" ")
  const date = dateTime[0];
  const time = dateTime[1];
 
  obj.date = date;
  obj.time = time;
 
  console.log(obj);
  return obj;
};

splitTime(objectToSplitTime);
