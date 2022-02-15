import React, { useReducer, useRef, useState, useEffect } from 'react';
import { Stage, Sprite, useTick, Container, rotation } from '@inlet/react-pixi'
import './container.css'
import bananaImg from '../../assets/images/bananaSlot_250x250.png'
import cherryImg from '../../assets/images/cherrySlot_250x250.png'
import lemonImg from '../../assets/images/lemonSlot_250x250.png'
import sevenImg from '../../assets/images/sevenSlot_250x250.png'



export default function SlotContainer(params) {
    const [credit, setCredit] = useState(1000);
    const [bet, setBet] = useState(95);
    const [win, setWin] = useState(0);

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

    // *********** calculate Win ********


    // *********** calculate Balance ********


    // treba da se napravi da kad se klikne na spin da se zavrte rilovi

    //da se dobije polozaj itema

    //da se odrede dobitne kombinacije

    return (
        <>
            <Stage width={500} height={500} options={{ backgroundColor: 0xefc3f2 }}>
                <Container 
                    x={250} y={250}
                    scale={scale} 
                    rotation={rotate}>
                    <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" x={0} y={0} /> 
                </Container>
            </Stage>

            {/* kako bih ja napravio u html-u */}
            {/* <div className="dashboard">
                <div>
                    <h1>Epic Joker</h1>
                </div>
                <div className="slot">
                    <div className="reel">
                        <div className="item"><img src={bananaImg}/></div>
                      
                        <div className="item"><img src={cherryImg}/></div>
                        <div className="item"><img src={sevenImg}/></div>
                    </div>

                    <div className="reel">
                        <div className="item"><img src={cherryImg}/></div>
                        <div className="item"><img src={bananaImg}/></div>
                        <div className="item"><img src={sevenImg}/></div>
                      
                    </div>
                    <div className="reel">
                      
                        <div className="item"><img src={bananaImg}/></div>
                        <div className="item"><img src={sevenImg}/></div>
                        <div className="item"><img src={cherryImg}/></div>
                    </div>
                </div>
                <div className="inputs">
                    <div className="inputField">
                        <input type="number" value={credit} onChange={handleChange} />
                        <p>CREDITS</p>
                    </div>
                    <div className="inputField">
                        <button onClick={minusBet}>-</button>
                        <input type="number" value={bet} onChange={handleChange} />
                        <button onClick={addBet}>+</button>
                        <p>BET</p>
                        
                    </div>
                    <div className="inputField">
                        <input type="number" value='10' onChange={handleChange} />
                        <p>WINNER PAID</p>
                    </div>
                </div>
                <div className="buttons">
                    <div className="buttonItem bet"  onClick={() => setBet(1)}><button>BET ONE</button></div>
                    <div className="buttonItem bet"  onClick={() => setBet(100) }><button>BET MAX</button></div>
                    <div className="buttonItem spin" onClick={() => setCredit(credit - bet)}><button>SPIN</button></div>
                </div>
            </div> */}
            
        </>
    )
}

// export default Container;
