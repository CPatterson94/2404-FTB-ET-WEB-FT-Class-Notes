// we want to have a car print its data to the webpage when updated via event handling "click"

class Car{

    // state of the class
    constructor() {
        this.distance =0;
        this.pressure =0;
        this.ele = document.createElement("div");
    }

    //  increase distance via argument value
    accelerate(){
        this.distance = this.distance+this.pressure;
        this.updateDistance()
    }

    //  decrease distance via argument value
    reverse(){
        this.distance = this.distance-this.pressure;
        this.updateDistance()
    }

    // modify pressure
    pressureMod(vl){
        this.pressure = this.pressure+vl;
        if(this.pressure<0){
            this.pressure=0;
        }

        this.updatePressure();
    }

    updateDistance(){
        this.ele.getElementsByTagName("h3")[0].innerHTML="Distance: "+this.distance;
    }

    updatePressure(){
        this.ele.getElementsByTagName("h4")[0].innerHTML="Pressure: "+this.pressure;
    }

    createPressureButton(val){
        const pressEle = document.createElement("button");
        if(val>0){
            pressEle.innerHTML=`Add ${val} Pressure`;
        }else{
            pressEle.innerHTML=`Remove ${val*-1} Pressure`;
        }

        pressEle.addEventListener("click", ()=>{
            this.pressureMod(val);
        })
        this.ele.appendChild(pressEle)
    }

    // add in any elements into this.ele
    createCarVisualElement(){
        const distanceDisplay = document.createElement("h3");
        const pressureDisplay = document.createElement("h4");
        const accel = document.createElement("button");
        accel.innerHTML="Accelerate"
        accel.addEventListener("click", ()=>{
            this.accelerate();
        })
        const rev = document.createElement("button");
        rev.innerHTML="Reverse";
        rev.addEventListener("click", ()=>{
            this.reverse()
        })

        this.ele.append(distanceDisplay, pressureDisplay, accel,rev);
        this.createPressureButton(10);
        this.createPressureButton(-10);
    }

    // appends this.ele to the body
    appendEle(){
        this.createCarVisualElement();
        document.body.appendChild(this.ele)
        this.updateDistance();
        this.updatePressure();
    }
}

const CRV = new Car();
const CIVIC = new Car();
CRV.appendEle();
CIVIC.appendEle();