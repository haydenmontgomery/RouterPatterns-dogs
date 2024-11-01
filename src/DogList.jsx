import React from "react";

const DogList = ({dogs}) => {

  return (
    <div>
      <ul>
        {dogs.map(({ name, age, src, facts }, idx) => (
          <li key={idx}>
            <p>{name}, {age}, {facts}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DogList;