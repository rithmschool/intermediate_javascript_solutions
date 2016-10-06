# Debugging Exercise

Answer the following questions:

- What does the `throw` keyword do?
- What is the difference between a `TypeError` and `ReferenceError`
- How do you create a snippet in the chrome dev tools?
- In the chrome dev tools, inside the sources tab, there is a "pause" button which allows you to "pause on caught exceptions". What is an `exception`? 
- How do we "catch" errors in JavaScript? Give an example with code for what that might look like

Explain what type of error will be thrown, why the error is occuring and how to fix it:

```javascript
person;
```

Type of error - 
Why - 


```javascript
var data = {};
data.displayInfo();
```

Type of error - 
Why - 

```javascript
var data = {};
data.displayInfo.foo = "bar";
```

Type of error - 
Why - 

```javascript
function data(){
    var thing = "foo";
}
data()
thing;
```

Type of error - 
Why - 

### Part II

Fix the broken code and explain what was wrong:

```javascript
for(var i=0; i > 5; i++){
    console.log(i)
}
```

What was wrong - 

```javascript
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5
    }
    return num;
}
```

What was wrong - 

```javascript
function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i)
    }
}
```
 
What was wrong - 
 
```javascript
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8]
    var evenNumbers = []
    for(var i=0; i<numbers.length-1; i++;){
        if(numbers % 2 = 0); {
            evenNumbers.push(i)
        }
        return evenNumbers;
    }
}
displayEvenNumbers() // should return [2,4,6,8] 

// HINT - seven things need to be changed here for this to work! Start by fixing the syntax errors and then run the function to see what your output is
```

What was wrong - 