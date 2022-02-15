import React, { useReducer, useRef, useState, useEffect, useCallback } from 'react';
import { Stage, Sprite, useTick, Container, rotation, Graphics, Text } from '@inlet/react-pixi';
import { ITextStyle, TextStyle } from "pixi.js";
import './container.css'
import bananaImg from '../../assets/images/bananaSlot_250x250.png';
import cherryImg from '../../assets/images/cherrySlot_250x250.png';
import lemonImg from '../../assets/images/lemonSlot_250x250.png';
import sevenImg from '../../assets/images/sevenSlot_250x250.png';
import spinBtn from '../../assets/images/spin.png';
import betOne from '../../assets/images/betOne.png';
import betMax from '../../assets/images/betMax.png';


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

    //* Text style
    // const style = new PIXI.TextStyle({
    //     align: "center",
    //     fontFamily: "sans-serif",
    //     fontSize: 60,
    //     fontWeight: "bold",
    //     fill: ["#26f7a3", "#01d27e"],
    //     stroke: "#eef1f5",
    //     strokeThickness: 1,
    //     letterSpacing: 5,
    //     wordWrap: true,
    //     wordWrapWidth: 350
    //   });

        

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
                    <Text
                        text={bet}
                        anchor={0.5}
                        x={230}
                        y={200}
                        style={
                            new TextStyle({
                              align: 'center',
                              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                              fontSize: 30,
                              fontWeight: 400,
                              fill: ['#ffffff', '#00ff99'], // gradient
                              stroke: '#01d27e',
                              strokeThickness: 4,
                              letterSpacing: 20,
                              dropShadowColor: '#ccced2',
                              dropShadowBlur: 4,
                              dropShadowAngle: Math.PI / 6,
                              dropShadowDistance: 6,
                              wordWrap: true,
                              wordWrapWidth: 440,
                            })
                          }
                        
                    />
                    <Text
                        text={credit}
                        anchor={0.5}
                        x={440}
                        y={200}
                        style={
                            new TextStyle({
                              align: 'center',
                              fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                              fontSize: 30,
                              fontWeight: 400,
                              fill: ['#ffffff', '#00ff99'], // gradient
                              stroke: '#01d27e',
                              strokeThickness: 5,
                              letterSpacing: 20,
                              dropShadowColor: '#ccced2',
                              dropShadowBlur: 4,
                              dropShadowAngle: Math.PI / 6,
                              dropShadowDistance: 6,
                              wordWrap: true,
                              wordWrapWidth: 440,
                            })
                          }
                        
                    />
                    <Sprite width={130} 
                            height={130} 
                            image={spinBtn}
                            x={430} y={270} 
                            on={playGame}/>
                    <Sprite width={80} 
                            height={80} 
                            image={betOne}
                            x={50} y={300} />
                    <Sprite width={80} 
                            height={80} 
                            image={betMax}
                            x={200} y={300}/>   
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
