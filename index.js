function iterativeLog(array){
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`);
})
}

function iterate(callback){

var helloWorld = [ "Mr. Robot", "Peace", "Mom", "Love"];

helloWorld.forEach(callback);

return helloWorld;

}


function doToArray(array, callback){
  array.forEach(callback);
}
