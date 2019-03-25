
document.addEventListener("DOMContentLoaded", function () {

    let favMovie = (movie) => `my fave movie is ${movie}` //template literals

    let result = favMovie("Peter Pan");
    console.log(result)

    let getFirstName = name => {
        var firstName = name.split(" ");
        console.log(firstName[0]);
    }
    getFirstName("Katherine Fleming")

    let getFirstName2 = () => {
        name = ("Katherine Fleming")
        console.log(name.split(" ")[0]);
    }
    getFirstName2();

    //new function that takes in 2 parameters and return an object literal
    //two properties (exponent result (x^y)and the product of two numbers)
    //log each property using a template literal

    function newFunc(a, b) {
        let result1 = (a ^ b)
        let result2 = (a + b)
        return {
            exponent: result1,
            product: result2

        };
    }
let stats = newFunc(4,5);
console.log(`The exponent is ${stats.exponent} and the product is ${stats.product}`)

//spread syntax
let array = ["Katherine", "Birmingham", "Ramen"];

function aboutMe(name, location, favFood){
    let myName = [...array[0]]
    console.log([...array])
}
aboutMe();

function takeParameter (){
    let favFood2= "Tacos";
    let thisArray = [...favFood2];
for (i=0; i<thisArray.length; i++){
    console.log (thisArray)
}
}
takeParameter();
})
