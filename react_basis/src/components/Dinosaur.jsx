import {useState} from "react";

function Dinosaur(props){
    const [sound, setSound] = useState("silent");

    const selected =props.active===props.data.name?"dinosaur selected":"dinosaur"

    return (
        <div className={selected} onClick={()=>props.setter()} style={{
            backgroundColor: props.data.color,
            // array of colors they dont work with white text
            color: props.data.color==="cyan"?"black":"white",
            // border: props.active===props.data.name?"solid 5px black":"none"
        }}>
            <h1>{props.data.name}</h1>
            <h3>This dinosaur walks on {props.data.walk} feet</h3>
            <h3>Current Noise: {sound}</h3>
            <button onClick={()=>setSound(sound === props.data.noise?"silent":props.data.noise)}>{sound === props.data.noise?"Be Quiet":"Make Noise"}</button>
        </div>
    )
}

export default Dinosaur;