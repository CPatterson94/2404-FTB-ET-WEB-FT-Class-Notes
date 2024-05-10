import {useEffect, useState} from "react";
import Character from "./Character.jsx";

function CharacterList() {

    const [characters, setCharacters] = useState([]);
    const [info, setInfo]=useState({})
    const [api, setApi]=useState(null);

    async function getAllCharacters() {
        const response = await fetch(api?api:"https://rickandmortyapi.com/api/character/");
        return await response.json();
    }


    useEffect(()=>{

            getAllCharacters().then((response) => {
                console.log(response)
                setInfo(response.info)
                setCharacters(response.results)
            })

    },[api])


    console.log(info)


    return (
        <>
            <div id="characterWrapper">
                {
                    characters.map(i =>
                        <Character key={i.id} data={i}/>
                    )
                }

            </div>
            <div className="buttonWrapper">
                {info.prev&&<button onClick={()=>setApi(info.prev)}>Previous</button>}
                {info.next&&<button onClick={()=>setApi(info.next)}>Next</button>}
            </div>
        </>
    )
}

export default CharacterList;