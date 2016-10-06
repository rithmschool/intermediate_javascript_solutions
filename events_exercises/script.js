// 1

window.onload = function(){

}

// 2

window.onload = function(){
    var el = document.getElementById("change_heading");
    el.innerText = "Hello world!";
}

// 3

window.onload = function(){
    var el = document.getElementById("change_heading");
    el.innerText = "Hello world!";

    var section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
        var selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    })
}

// 4

window.onload = function(){
    var el = document.getElementById("change_heading");
    el.innerText = "Hello world!";

    var section = document.querySelector("section");
    section.addEventListener("mouseover", function(event){
        var selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    })

    var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);
}

// 5

window.onload = function(){
    var el = document.getElementById("change_heading");
    el.innerText = "Hello world!";

    var section = document.querySelector("section")
    section.addEventListener("mouseover", function(event){
        var selectedColor = document.querySelector('.selected');
        selectedColor.innerText = event.target.className;
    })

    var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);

    var button = document.querySelector("button");
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Car 1 wins!");
                reset(car1,car2);
            }
        },60)

        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Car 2 wins!");
                reset(car1,car2);
            }
        },60)


    })
}
