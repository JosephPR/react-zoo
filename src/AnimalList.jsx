import React from 'react';

export default function AnimalList (props) {
  // const animals = props.animals.map (animal =>{
  //   return <li>{animal.name}</li>
  // })
  const animals = elementify(props.animals)
  return (
    <>
    <ul>
      {animals}
    </ul>

    </>
  )
}

  const elementify = (animals) => {
    return  animals.map (animal =>{
      return <li>{animal.name}</li>
    })
  }
