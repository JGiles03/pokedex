import Pokecard from "../Pokecard"

export default function Pokelist({cards}){
    return(
        <div className="Pokelist">
            {cards.map((card) =>(<Pokecard 
                card={card} 
            />))}
        </div>
    )
}