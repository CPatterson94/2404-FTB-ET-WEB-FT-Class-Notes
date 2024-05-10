const list = ["stress ball", "cup", "keyboard"]

function lengthCheck(vl){
    if(vl.length>6){
        return "Very long word"
    }else{
        return "very short word"
    }
}

console.log(list.length)

for(let i=0; i<list.length; i++){
    console.log(lengthCheck(list[i]))
}

// let num=0
// while(num<4){
//     coolFunction();
//     num++;
// }