// {data} is a deconstruction of props
function Character({data}){

    // const data = props.data;

    return(
        <div className="character">
            <h1>{data.name}</h1>
            <img src={data.image} alt={data.name}/>
        </div>
    )
}

export default Character;