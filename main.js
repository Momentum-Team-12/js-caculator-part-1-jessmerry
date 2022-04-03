console.log ("Hello, world!")

// const numSquares = document.querySelectorAll(".square");
// console.log ("array of squares", numSquares);

const results = document.getElementById("results")
console.log ("results div", results);

let squares = document.querySelectorAll('.square')
    for (let square of squares){
        square.addEventListener('click', function (event){
            console.log(event.target.innerText)
        })
    }


// let key1 = document.getElementById("square-one")
// key1.addEventListener('click', function (){
//     console.log("button was pressed")
// })