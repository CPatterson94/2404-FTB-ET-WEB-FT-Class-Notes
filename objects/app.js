// array list of values
// object is a value that contains multiple values

const products = [
    {
        name:"cup",
        stock:20,
        price: 1.99
    },
    {
        name:"headphones",
        stock:50,
        price: 399.99
    },
    {
        name:"stress ball",
        stock:2,
        price: 0.99
    },
];

for(let i=0;i<products.length; i++){
    // check and see if it has high stock
    if(products[i].stock>10){
    //     print message that says in stock
        console.log(products[i].name+" High stock")

    } else{
    //     print message that says its low stock
        console.log(products[i].name+" low stock")

    }

}



// const product ={
//     id:"asdhf237423481clkjsda",
//     name:"batman set",
//     price: {
//         us:59.99,
//         canada: 70,
//         euro: 61.82
//     },
//     pieceCt:500,
//     age: 8
// }

// console.log(product.price.canada)

// function ObjectFunction(name, age){
//     this.name=name;
//     this.age=age;
//
//     // this.older = ()=>{
//     //
//     // }
// }
//
// const luke = new ObjectFunction("luke", 29);
// const tom = new ObjectFunction("tom", 63);

// console.log(tom.name)

const froyo = {
    vanilla:3,
    coffee:2,
    strawberry:1
}

// hint obj[]


