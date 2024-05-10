// document.body.innerHTML="<div>Hello World</div>"

const dropdown = document.getElementById("dropdown")


dropdown.innerHTML="Hello";
dropdown.style.color="red";

const boxes = Array.from(document.getElementsByClassName("box"))

const data = [{name:"luke", color: "blue"}, {name:"selene", color:"black"}, {name:"emma", color: "purple"}];

boxes.forEach((i, idx)=>{
    i.innerHTML=data[idx].name
})

data.forEach((i)=>{
    const ele = document.createElement("div");

    const nameEle = document.createElement("h1");

    ele.classList.add("box")
    nameEle.innerHTML=i.name;
    ele.style.color=i.color;

    ele.appendChild(nameEle);
    document.body.appendChild(ele);



})


