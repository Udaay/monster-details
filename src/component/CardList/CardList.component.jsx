import React from 'react'
import './cardList.styles.css'
import { Card } from '../Card/Card.component'

export const CardList = (props) => {
    const { monsters } = props;
    console.log(monsters)
    return(
        <div className='card-list' >
         {monsters.map( monster => < Card key={monster.id} monster = {monster} />) }
        </div>
    )
}