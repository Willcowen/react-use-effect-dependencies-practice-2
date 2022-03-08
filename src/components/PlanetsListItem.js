import { useState, useEffect } from "react";

function PlanetsListItem(props) {
  const { planet } = props;
  const [firstFilm, setFirstFilm] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    console.log(planet.films[0])
    fetch(planet.films[0])
      .then(res => res.json())
      .then(json => {
        setFirstFilm(json.title)
    })
  }, [planet] ) 

  console.log("Planet", planet);

  return <li>{planet.name} - First Film {firstFilm}</li>;
}

export default PlanetsListItem;
