let iterativeLog = (array,callBack) =>{
  array.forEach(callBack);
  console.log(`${index}: ${element}`);
};
let iterate = (callBack) => {
  let arrayA = ["red","green","blue"];
  arrayA.forEach(callBack);
  
  return arrayA;
};
let doToArray = (array, callBack) =>{
  array.forEach(callBack)
}