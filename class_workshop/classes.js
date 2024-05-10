class Printer {
    constructor(type) {
        this.type=type;
        this.cyan = 50;
        this.magenta = 50;
        this.yellow = 50;
        this.black = 50;
        this.ele = document.createElement("div");
    }

    printJob(jb){
        this.cyan=this.cyan-jb.cyan;
        this.yellow=this.yellow-jb.yellow;
        this.magenta=this.magenta-jb.magenta;
        this.black=this.black-jb.black;
    }

    overallInk(){
        return ((this.cyan+this.magenta+this.yellow+this.black)/200)*100+"%";
    }

    renderEle(){
        this.ele.innerHTML=this.type;
        document.body.appendChild(this.ele);

        this.ele.addEventListener("click", ()=>{
            this.showInk()
        })
    }

    showInk(){
        this.ele.innerHTML= "Magenta:"+this.magenta;
    }


}



// printers is data from a database
const printers = ["hp", "canon", "microsoft"];
const appendedPrinters =[];

printers.forEach((i)=>{
    const newPrinter =new Printer(i)
    appendedPrinters.push(newPrinter);
    newPrinter.renderEle();

})

console.log(appendedPrinters)



// const hpjet = new Printer("hp");
// const canon = new Printer("canon");
//
// hpjet.printJob({
//     cyan:2,
//     magenta:0,
//     yellow:0,
//     black:10
// })
// console.log(hpjet.overallInk())