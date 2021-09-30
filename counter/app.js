/* let count = 0;

const decrease = document.querySelector(".btn.decrease");
const reset = document.querySelector(".btn.reset");
const increase = document.querySelector(".btn.increase");
let value = document.getElementById("value");

decrease.addEventListener('click', function(){
    count--;
    value.innerHTML = count;
    console.log(count);
});

reset.addEventListener('click', function(){
    count = 0;
    value.innerHTML = count;
    console.log(count);
});

increase.addEventListener('click', function(){
    count++;
    value.innerHTML = count;
    console.log(count);
}); */


////////////////////////////////////////////////////
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList
        if(style.contains("decrease")){
            count--;
        }
        else if(style.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }

        if(count < 0 ){
            value.style.color = "red";
        }

        if(count == 0 ){
            value.style.color = "black";
        }
        value.innerHTML = count;
    });
});


