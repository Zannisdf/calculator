export const handleMultAndDiv = (arr) => {
  let i = 0;
  while (arr.includes('*') || arr.includes('/')) {
    if (arr[i] === '*'){
      let mult = parseFloat(arr[i-1]) * parseFloat(arr[i+1]);
      arr.splice(i-1,3,mult);
      i = 0;
    } else if (arr[i] === '/'){
      if (parseFloat(arr[i+1])===0){
        arr.splice(0,arr.length,'ERROR');
      } else {
        let div = parseFloat(arr[i-1]) / parseFloat(arr[i+1]);
        arr.splice(i-1,3,div);
      }
      i = 0;
    }
    i++;
  }
  return arr;
}

export const handleSumAndMinus = (arr) => {
  let i = 0;
  while (arr.length > 1) {
    if (arr[i] === '+'){
      let sum = parseFloat(arr[i-1]) + parseFloat(arr[i+1]);
      arr.splice(i-1,3,sum);
      i = 0;
    } else if (arr[i] === '-'){
      let minus = parseFloat(arr[i-1]) - parseFloat(arr[i+1]);
      arr.splice(i-1,3,minus);
      i = 0;
    }
    i++;
  }
  return arr;
}
