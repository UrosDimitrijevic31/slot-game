import React, { useReducer, useRef, useState, useEffect, useCallback } from 'react';
import { Stage, useTick, Container, rotation, Graphics } from '@inlet/react-pixi';
import { ITextStyle, TextStyle } from "pixi.js";
import './container.css'
import bananaImg from '../../assets/images/bananaSlot_250x250.png';
import cherryImg from '../../assets/images/cherrySlot_250x250.png';
import lemonImg from '../../assets/images/lemonSlot_250x250.png';
import sevenImg from '../../assets/images/sevenSlot_250x250.png';
import spinBtn from '../../assets/images/spin.png';
import betOne from '../../assets/images/betOne.png';
import betMax from '../../assets/images/betMax.png';
import DisplayText from './DisplayText';
import Sprite from './Sprite';

export default function SlotContainer(params) {
    const [credit, setCredit] = useState(1000);
    const [bet, setBet] = useState(1);
    const [win, setWin] = useState(0);
    const [play, setPlay] = useState(false);

    const rotate = 0;
    const scale = 1;


    useEffect(() => {
        console.log('ovo je useeffect');
    })

    const handleChange = (e) => {
        console.log('cao');
    }

    // ********* calculate Bet ********
    const minusBet = () => {
        if(bet > 1) {
            setBet(bet - 1)
        } else {
            console.log('hendlovati da se disableuje dugme');
        }
    }

    const addBet = () => {
        if(bet < 100) {
            setBet(bet + 1)
        } else {
            console.log('hendlovati da se disableuje dugme');
        }
    }

    // *********** calculate Win *************


    // *********** calculate Balance *********

    // *********** play functionality ********

    const playGame = () => {
        setPlay(true);
        console.log(play);
    }

    // treba da se napravi da kad se klikne na spin da se zavrte rilovi

    //da se dobije polozaj itema

    //da se odrede dobitne kombinacije

    // *shape in PixiJS
    const draw = React.useCallback(g => {
        g.lineStyle(2, 0xFEEB77, 1);
        g.beginFill(0x650A5A, 1);
        g.drawCircle(250, 250, 50);
        g.endFill();
      }, [])        

    return (
        <>
            <Stage 
                width={840} 
                height={660} 
                options={{ backgroundColor: 0x01262a } } 
                resolution={1}
            >
                <Container 
                    x={250} y={250}
                    scale={scale} 
                    rotation={rotate}>
                    <DisplayText name={bet}    x={230} y={200}/>
                    <DisplayText name={credit} x={440} y={200}/>
                    
                    <Sprite width={130} height={130} image={spinBtn} x={430} y={270} />
                    <Sprite width={80}  height={80}  image={betOne}  x={50}  y={300} />
                    <Sprite width={80}  height={80}  image={betMax}  x={200} y={300} />
                </Container>
            </Stage>            
        </>
    )
}