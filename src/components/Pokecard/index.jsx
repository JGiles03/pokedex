export default function Pokecard({card}){

    return(
        <div className="pokecard">
            <h2>{card.name}</h2>
            <h4>Id: {card.id}</h4>
            <h4>Type: {card.type}</h4>
            <img src={card.image} alt={`image of ${card.name}`}></img>
        </div>
    )
}