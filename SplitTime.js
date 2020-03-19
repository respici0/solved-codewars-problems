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
  console.log(obj);
  const key = Object.keys(obj);
  const values = Object.values(obj);

  if (key[0] === "time") {
    const date = values[0].split(" ");
    obj.date = date[0];
  }

  console.log(obj);

  return obj;
};

splitTime(objectToSplitTime);
