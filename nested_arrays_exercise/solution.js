function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

function makeXOGrid(rows,amount){
    var finalArr = []
    var startWithX = true
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<amount; j++){
            if(startWithX){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
            startWithX = !startWithX
        }
        finalArr.push(newRow)
    }
    return finalArr;
}
