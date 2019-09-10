import React from 'react';
import { Card } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



export default function AnimalList (props) {

  const animals = props.animals.map (animal =>{
      return <Card
       className='card'
       key={animal.id}
       >

      <h3>{animal.name}</h3>
      <img className='image' src={animal.image} alt='animal' />
   <p>{animal.description}</p>
   <DeleteIcon  onClick= { () => props.deleteAnimal(animal.id)}/>
    </Card>
  })
  // const animals = elementify(props.animals)
  return (
    <>
    <ul className='animals-list'>
      {animals}
    </ul>

    </>
  )
}

  // const elementify = (animals) => {
  //   return  animals.map (animal =>{
  //     return <Card
  //        className='card'
  //        key={animal.id}
  //        >
  //
  //       <h3>{animal.name}</h3>
  //       <img className='image' src={animal.image} alt='animal' />
  //    <p>{animal.description}</p>
  //    <DeleteIcon/>
  //     </Card>
  //   })
  // }
