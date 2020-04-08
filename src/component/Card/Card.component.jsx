import React from 'react'
import './card.styles.css'

export const Card = (props) => {
    const { monster } = props;
    console.log(monster)
    return(
       <div className='card-container' >
           <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size180x180`} />
           <h2> {monster.name} </h2>
           <p> {monster.email} { monster.id} </p>
       </div> 
    );
}