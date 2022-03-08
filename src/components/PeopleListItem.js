import { useEffect, useState } from "react";

function PeopleListItem(props) {
  const { person } = props;
  const [homeworld, setHomeworld] = useState('');
  console.log("homeworld", person.homeworld)
  useEffect(() => {
    fetch(person.homeworld)
      .then(res => res.json())
      .then(json => {
        setHomeworld(json.name)
    })
  }, [person] ) 

  console.log("person", person)

  return (
    <ul>
      <li>{person.name} - Homeworld: {homeworld}</li>
    </ul>
  );
}

export default PeopleListItem;
