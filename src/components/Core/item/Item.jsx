import React from 'react';
import './Item.css'

const Item = (props) => {
    return (
        <div className="item">
            <img src={props.img} alt="some text"/>
        </div>
    )
}

export default Item;