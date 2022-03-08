import { useState, useEffect } from "react";

function StarshipsListItem(props) {
  const { starship } = props;

  const [firstPilot, setFirstPilot] = useState('')
  useEffect(() => {
  if (starship.pilots.length === 0) {setFirstPilot('No Pilots')}
      fetch(starship.pilots[0])
        .then(response => response.json())
        .then(pilot => {
          setFirstPilot(pilot.name)
        })
  }, [starship])

  console.log({ starship });

  return <li>{starship.name} - First Pilot {firstPilot}</li>;
}

export default StarshipsListItem;
