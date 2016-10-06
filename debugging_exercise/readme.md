# Debugging Exercise

Answer the following questions:

- What does the `throw` keyword do? **The throw keyword allows you to return an error/exception of your choice**
- What is the difference between a `TypeError` and `ReferenceError` **TypeErrors occur when JavaScript is unable to perform a certain operation on a data type (invoking something that is not a function, accessing properties on something that is not an object). ReferenceErrors occur when JavaScript does not have a reference to the variable in memory (accessing a variable that is not defined or not in the current or outer scope)**
- How do you create a snippet in the chrome dev tools? **Open the sources tab, head to the left hand panel and click on snippets, then right click inside the tab and click 'new'**
- In the chrome dev tools, inside the sources tab, there is a "pause" button which allows you to "pause on caught exceptions". What is an `exception`?  **An exception is an error that occurs in your program. Caught exceptions are errors that are evaluated in a try/catch block**
- How do we "catch" errors in JavaScript? Give an example with code for what that might look like **We catch errors using a try/catch block**

```js
try {
   undefined()
} catch(e){
	console.log("We just made a TypeError, we can learn more using the error object returned to us:", e);
}
```

Explain what type of error will be thrown, why the error is occuring and how to fix it:

```javascript
person;
```

Type of error - **ReferenceError**

Why - **Because we are accessing a variable that has not been defined**


```javascript
var data = {};
data.displayInfo();
```

Type of error - **TypeError**
Why - **The value of data.displayInfo is undefined, so we are invoking undefined which we can not do. Undefined is not a function**

```javascript
var data = {};
data.displayInfo.foo = "bar";
```

Type of error - **TypeError**
Why - **We are trying to assign a property of foo on undefined. Undefined is not an object so we can not do that. **

```javascript
function data(){
    var thing = "foo";
}
data()
thing;
```

Type of error - **ReferenceError**
Why - **The `thing` variable is only available in the scope of the `data` function. We are trying to access it out of scope and JavaScript does not have a reference to it**

### Part II

Fix the broken code and explain what was wrong:

```javascript
for(var i=0; i > 5; i++){
    console.log(i)
}
```

**FIX**

```javascript
for(var i=0; i < 5; i++){
    console.log(i)
}
```

What was wrong - **our condition inside the loop was not correct**

```javascript
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5
    }
    return num;
}
```

**FIX**

```javascript
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5
    }
    return num;
}
```

What was wrong - **we were using assignment with `=` in our if statement, not comparison with `==` or `===`.**

```javascript
function loopToFive(){
    for(var i=0, i < 5, i++){
        console.log(i)
    }
}
```

**FIX**

```javascript
function loopToFive(){
    for(var i=0; i < 5; i++){
        console.log(i)
    }
}
```

 
What was wrong -  **our syntax was incorrect inside the loop. We separate each section of a for loop with a `;` and not a `,`**
 
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

**FIX**

```js
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8]
    var evenNumbers = []
    for(var i=0; i<numbers.length; i++){
        if(numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i])
        }
    }
	return evenNumbers;
}
```

What was wrong - **The following errors**

1. Each part of the for loop should be separated by a `;` not a `,'
2. The `for` loop should not have a final `;`
3. The `if` statement should not have a `;` after the condition
4. We should loop until `i < numbers.length` or `i <= numbers.length-1`and not `numbers.length-1`
5. We can't use assignment (=) inside of the condition, we have to use comparisson (== or ===).
6. We need to make sure our `if` condition checks the value we are at in the numbers array (`numbers[i]`) and not the entire `numbers` array
7. We need to push into our `evenNumbers` array, the value not the index `numbers[i]` instead of `i`.
8. We need to make sure we `return` after the loop has finished and not after the if statement.