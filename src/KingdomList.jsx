import React from 'react';
import { Card } from '@material-ui/core';


export default function KingdomList (props) {

      const kingdoms = props.kingdoms.map(kingdom => {
        return  <Card
       className='card'
       key={kingdom.id}
       >

      <h3>{kingdom.name}</h3>
      <img className='image' src={kingdom.image} alt='kingdom' />
   <p>{kingdom.description}</p>
    </Card>
  })
  return (
    <>
    <ul className='animals-list'>
      {kingdoms}
    </ul>

    </>
  )
}
