console.log ("Hello, world!")

// const numSquares = document.querySelectorAll(".square");
// console.log ("array of squares", numSquares);

const results = document.getElementById("results")
console.log ("results div", results);

const equals = document.getElementById("square-equals")

const clear = document.getElementById("square-clear")

let squares = document.querySelectorAll('.square')

    for (let square of squares){
        square.addEventListener('click', function (event){
            if (event.target === clear){
                results.innerText = ""
            }
            else if (event.target === equals){
                results.innerText = eval(results.innerText)
            }
            else {
                console.log(event.target.innerText)
                results.innerText += event.target.innerText
            }
        })
    }

// if we click a number, return the number - else
// if we click clear, empty the results field - if .
// if we click equals, return answer - else if .

// let key1 = document.getElementById("square-one")
// key1.addEventListener('click', function (){
//     console.log("button was pressed")
// })