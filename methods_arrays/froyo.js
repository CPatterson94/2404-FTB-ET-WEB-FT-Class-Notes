const flavors =['vanilla', 'chocolate', "chocolate", "mint"];
const flavorsObj = {};
flavors.forEach((i)=>{
    flavorsObj[i]=0;
})

flavors.forEach((i)=>{
    if(i in flavorsObj){
        flavorsObj[i]++
    }
})

console.log(flavorsObj)