import Pokecard from "../Pokecard"

export default function Pokelist({cards}){
    return(
        <div className="pokelist">
            {cards.map((card) =>(<Pokecard 
                card={card} 
            />))}
        </div>
    )
}