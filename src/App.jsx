//Libraries
import React, {useEffect, useState} from 'react'
import { Routes, Route, Navigate, useParams } from 'react-router-dom';

//Assets
import whiskey from './assets/whiskey.jpg';
import duke from './assets/duke.jpg';
import perry from './assets/perry.jpg';
import tubby from './assets/tubby.jpg';

//Components and css
import Nav from './Nav';
import DogDetails from './DogDetails';
import DogList from './DogList';
import './App.css'

function App({ dogs }) {
  const [currentDog, setCurrentDog] = useState(null);

  const findDog = (name) => {
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
    setCurrentDog(dog);
  }
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/dogs' element={<DogList dogs={dogs} />}/>
        <Route 
        path='/dogs/:name' 
        element={<DogDetails findDog={findDog} dog={currentDog}/> } />
        <Route path='*' element={<Navigate to='/dogs'/>} />
      </Routes>
    </div>
  )
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;