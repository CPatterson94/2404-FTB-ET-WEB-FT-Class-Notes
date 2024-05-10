// an app that displays data from a star wars api

// global variables
const wrapper = document.getElementById("wrapper");

// get all sw characters

// get a single character

//get all planets
async function getAllPlanets() {
    // converts response from api to real usable json
    const response = await fetch("https://swapi.py4e.com/api/planets");
    return await response.json();
}

// get a single planet maybe redundant?

//get all vehicles

// get a single vehicle

//get all species

// get a single species

// this section renders the elements of the specific data. ensure that only one set of data is shown at a time
//render characters

// render planets
function renderPlanets() {
    wrapper.innerHTML = "";
    getAllPlanets().then((response) => {
        response.results.forEach((i) => {
            renderSinglePlanet(i)
        })
    })
}

// render vehicles

// render species

// render single character

// render single planet

function renderSinglePlanet(info) {
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    nameEle.innerHTML = info.name;
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);

//     click to grab single planet info

    ele.addEventListener("click", () => {
        wrapper.innerHTML = "";
        renderSinglePlanet(info)
    })
}

// render single vehicle

// render single species

// render single species

// have a menu that allows a user to navigate between the different lists of data

// click on a button to render all the planets

document.getElementById("planets").addEventListener("click", ()=>{
    renderPlanets()
})

// allow a user to return to the "all X" listing from a single item page where x is the data set the single item belongs to

// initialize application
renderPlanets();

// BONUS: Figure out how to page between the different listings of data

// BASE API https://swapi.py4e.com/api/

// API Documentation https://swapi.py4e.com/documentation#intro



