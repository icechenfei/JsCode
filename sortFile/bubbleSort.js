const bubbleSort = function(arr) {
  console.time('test')
  let len = arr.length
  for(let i=0;i< len -1;i++){
    for(let j=0;j<len-1;j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]] 
      }
    }
  }
  console.timeEnd('test')
  return arr
}

var arr = [1,2,3,123,7,5,9,24,11]
console.log(bubbleSort(arr))
