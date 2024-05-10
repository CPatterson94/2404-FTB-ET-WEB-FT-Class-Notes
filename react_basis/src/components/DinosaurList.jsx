import Dinosaur from "./Dinosaur.jsx";
import {dinosaurs} from "../assets/dinosaurData.js";
import {useState} from "react";

function DinosaurList(){

    // in the future we wont do it like this
    const [selected, setSelected]=useState("")

    return(
        <div id={"dinosaurWrapper"}>
            {dinosaurs.map(i =>
                // props represent information coming from different sources
                <Dinosaur key={i.name} data={i} active={selected} setter={()=>setSelected(i.name)}/>
            )}
        </div>
    )
}

export default DinosaurList;