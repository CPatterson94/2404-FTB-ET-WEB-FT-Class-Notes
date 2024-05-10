//  index 0,1,2
const list = ['rodger dodger', 'bone shaker', 'rollin toaster', "car45"];
const numericList = [35, 78, 92, 10]
// numericList.sort(function (a,b){return b-a});

const bools =[]
numericList.forEach((i, idx)=>{
    numericList[idx]++
})

const check = list.map((i)=>{
   return i.includes("rodger")
})

console.log(check)

const sorted = list.filter((i)=>{
    return i.includes("er")
})

// console.log(sorted)

const sum = numericList.reduce((total, value)=>{
    return total + value;
})

// console.log(sum)

// splice example
// list.splice(1,1, "birthday burner")

// slice example
// const sliced =list.slice(2)


// do not do this!!!
// delete list [0]

// add to the end of the array
// list.push("shark bite")

// store value of what you shifted
// let shifted = list.shift();

// list.unshift("croc_rod")

// concat example
// list.concat(list2)

// console.log(list);
// console.log(list.indexOf('bone shaker'));
// console.log(list.includes("rodger"));

// console.log(list[3]);
// console.log(list.length)

// Array.method

// Array.length
//Array.push()