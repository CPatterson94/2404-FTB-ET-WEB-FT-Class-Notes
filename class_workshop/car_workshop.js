// in this workshop using classes, create a 'car' in JavaScript that has the following features

// a car starts with 100% fuel. it cannot go above 100% or below 0%

//a car can accelerates or reverses, it loses fuel

//if a car has no fuel, the car cannot accelerate or reverse

//a car travels a distance as an integer.
// When it accelerates, it increases its distance
// When it reverses, it decreases its distance (can become a negative number)

// Based on the amount of pressure put on the pedal, the amount traveled while accelerating or reversing is increased

// a car has these traits showcased as an object
const example = {
    name: "CRV",
    distance: 0,
    // remember you cannot do direct percents in JS. 100% is not a usable value
    fuel: 100,
    pedalPressure: 0
}

class Car {
    // constructor is done
    constructor(name){
        this.distance = 0;
        this.fuel =  100;
        this.pedalPressure = 0;
        this.name =name;
    }

    changePedalPressure(vl){
        this.pedalPressure=this.pedalPressure+vl;
    }

    accelerate(){
        this.distance=this.distance+this.pedalPressure;
    }
}

const CRV = new Car("CRV");
CRV.changePedalPressure(10)
CRV.accelerate()
CRV.accelerate()
CRV.changePedalPressure(10)
CRV.accelerate()
console.log(CRV.distance);

// fill out the below comments

//overarching car class

//accelerate

//reverse

//burn fuel

//check if fuel is empty

//refuel car

//after creating a car, have it be displayed in your html. The car should display its name, fuel, distance, and pedal pressure
//the car should have 3 buttons. Accelerate, Reverse, fuel. Those functions should affect that car only

// you'll need to modify your previous overarching class to work with HTML elements

// feel free while working to import/export JS files to help keep your code cleaner

// After adding 1 car, add a second one to ensure each car can only have its interacts affect itself