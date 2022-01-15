import "./Pokemoncard.css"

function PokemonCard({ name, src, strength, abilities })
{
  return (
    <section className="pokemon__card">
      <h3>{name[ 0 ].toUpperCase() + name.slice(1).toLowerCase()}</h3>
      <div>
        <img src={src} alt={name} />
      </div>
      <section className="pokemon__stats">
        <h4>Strength: {strength}</h4>

        <ul>
          <h4>Abilities:</h4>
          {abilities.map((item) =>
          {
            return (
              <li key={item.ability.name}>
                {item.ability.name[ 0 ].toUpperCase() +
                  item.ability.name.slice(1).toLowerCase()}
              </li>
            )
          })}
        </ul>
      </section>
    </section>
  )
}

export default PokemonCard
