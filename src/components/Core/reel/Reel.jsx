import React, { useEffect, useState } from 'react';
import './Reel.css'
import bananaImg from '../../../assets/images/bananaSlot_250x250.png';
import cherryImg from '../../../assets/images/cherrySlot_250x250.png';
import lemonImg from '../../../assets/images/lemonSlot_250x250.png';
import sevenImg from '../../../assets/images/sevenSlot_250x250.png';
import Item from '../item/Item'
import { RenderTexturePool } from 'pixi.js';


const Reel = (props) => {

    const imagesOfItems = [bananaImg, cherryImg, lemonImg, sevenImg];
    const [helperArray, setHelperArray] = useState([]); 
    // const REEl_NUMBER = 3;

    // promesam nizove
    function shuffleArray(array) {
        for ( let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        setHelperArray(array)
        return helperArray;
    }

    useEffect(()=> {
        shuffleArray(imagesOfItems); 
    }, [])

    const items = helperArray.map(item => {
        return (
            <Item img={item} key={item} />
        )
    })

    // let reels = () => {
        // for (let i = 0; i < 3; i++) {
        //     return (
        //         <Reel />
        //     )            
        // }
    // }

    //napravim reel sa itemima
    return (
        <div className="reel">
            {items}
        </div>
    )
}

export default Reel;

// treba da promesa iteme u RenderTexturePool, pa da izrenderuje, pa sve tako