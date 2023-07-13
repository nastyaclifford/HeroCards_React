import React from 'react';
import '../style/Hero.css';

function Hero(props) {
    return(
        
            <div className = "list_item">
            <div className="item_name">{props.name}</div>
            <div className="item_universe">Вселенная: {props.universe}</div>
            <div className="item_alterego">Альтерэго: {props.alterego}</div>
            <div className="item_occupation">Вид деятельности: {props.occupation}</div>
            <div className="item_friends">Друзья: {props.friends}</div>
            <div className="item_superpowers">Суперспособности: {props.superpowers}</div>
            <img className="item_image" alt="imageHero" src={props.url}></img>
            <div className="item_info">{props.info}</div>
        </div>
        
    )
}

export default Hero;