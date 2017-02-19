function countDown(time){
  var timer = setInterval(function(){
    time--;
    if(time <= 0){
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  },1000)
}

function randomGame(){
  var num;
  var times = 0;
  var timer = setInterval(function(){
    num = Math.random();
    times++
    if(num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  },1000)
}

function isEven(num){
  return num % 2 === 0;
}

function isOdd(num){
  return num % 2 !== 0;
}

function isPrime(value) {
    for(var i = 2; i <= Math.sqrt(value); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function numberFact(num, fn){
  return fn(num);
}

function find(arr, fn){
  for(var i=0; i<arr.length; i++){
    if(fn(arr[i])) return arr[i];
  }
}

function findIndex(arr, fn){
  for(var i=0; i<arr.length; i++){
    if(fn(arr[i])) return i;
  }
}

function specialMultiply(a,b){
  if(arguments.length === 1){
    return function(b){
      return a*b;
    }
  }
  return a*b;
}




