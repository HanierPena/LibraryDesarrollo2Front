import React from 'react';
import '../css/Cards.css';

function Cards(props){
    return(
        <div className='card'>
            <div className='card__body'>
                <img src={props.img} alt="libro" className='card__image' />
                <h2 className='card__title'> {props.title} </h2>
                <p className='card__description'>{props.description}</p>
            </div>

        </div>
    )
}
export default Cards;