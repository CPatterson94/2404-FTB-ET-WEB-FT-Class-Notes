let data="";
const wrapper = document.getElementById("wrapper");

// modify database eusing POST/PUT/DELETE
async function addCharacter(){
    const response = await fetch("url",{
        method:"POST",
        // send back information
        body: JSON.stringify({
            name:"luke"
        })
    });

    return response
}

// grabs initial promise
async function getAllCharacters(){

    const response = await fetch("https://swapi.py4e.com/api/planets");
    return await response.json();
}

async function getSingleCharacter(id){

    const response = await fetch("https://rickandmortyapi.com/api/character/"+id);
    return await response.json();
}

// allows us to use the result of promise
getAllCharacters().then((response)=>{
    console.log(response.results)
    response.results.forEach((itm)=>{
        createCard(itm)
    })
})

// creates character element
function createCard(info){
    const ele = document.createElement("div");
    const nameEle = document.createElement("h1");
    const imgEle = document.createElement("img");
    imgEle.setAttribute("src", info.image)
    imgEle.setAttribute("alt", info.name)
    nameEle.innerHTML=info.name;
    ele.appendChild(imgEle)
    ele.appendChild(nameEle)
    wrapper.appendChild(ele);

    ele.addEventListener("click", ()=>{
        getSingleCharacter(info.id).then((response)=>{
            wrapper.innerHTML="";
            createCard(info)
        })
    })
}



