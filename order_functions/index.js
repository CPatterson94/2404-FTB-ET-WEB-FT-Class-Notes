// arrow components are easier to write and allow us in the future to not always have to invoke a function
const component = num=> 5+num;

// ternary operator if/else
const tern = (num)=> 5+num===10?"The number is 10!":"The number is not 10";

// just the if
const ander =(val)=> val==="If it meets the requirement"&&"Rendered Element"

function process(x){
    return function(y){
        return x+y;
    }
}

function doMath(x,y){
    return x+y
}
// if using only once, just do the function in the argument
const sum = doMath(4,3)
// console.log(process(sum)(3))

// component()

// arrows are meant for returning values while functons is used for operating multiple similar processes

function normal(){

}

// console.log(tern(4))

// .map() returns a value for each iteration in array. Creates a new arrays with those new values
const days = ["sun", "mon", "tues", "wednes", "thurs", "fri", "satur"];

// if i have 1 value in my argument for an => function, dont need ()
const fulldays = days.map(i=>
    i+"day"
)

fulldays.forEach(i=> days.push())

console.log(fulldays)

async function getSingleCharacter(id){
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character/"+id);
        return await response.json();
    }catch(err){
        console.log("you're wrong")
        return err
    }
}
const mathRounder = val=> Math.ceil(val);

console.log(mathRounder(5.25))
const signUps=[];

function signUp(info){
    if(signUps.length<3){
        signUps.push(info)
    }
}

const isRelevant = (words,sentence)=> ;

// console.log(getSingleCharacter(1928374509234758))
