
// You should implement your task here.

module.exports = function towelSort (arr) {
    let newArr = [];
    if(!arr) { return newArr}
    for(let i = 0; i < arr.length; i++){
      if(i % 2 !== 0){
          arr[i].sort((a, b) => b - a);
        }
        for(let j = 0; j < arr[i].length; j++){
          newArr = newArr.concat(arr[i][j]);
        }
        
    }
    return newArr;
}
