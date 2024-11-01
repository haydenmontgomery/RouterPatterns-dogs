import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import "./DogDetails.css"

const DogDetails = ({ findDog, dog}) => {
  const { name } = useParams();
  const { name: dogName, age, src, facts } = dog || {};
  useEffect(() => {
    findDog(name);
  }, [name, findDog]);

  if (!dog) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="DogDetails">
      <h1>{dogName}</h1>
      <p>Age: {age}</p>
      <img src={src} alt={dogName} />
      <ul>
        {facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;