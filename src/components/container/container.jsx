import React, { Component, useReducer, useRef } from 'react';
import { Stage, Sprite, useTick } from '@inlet/react-pixi'
import './container.css'
import banana from '../../assets/images/bananaSlot_250x250.png'
import cherry from '../../assets/images/cherrySlot_250x250.png'
import lemon from '../../assets/images/lemonSlot_250x250.png'
import seven from '../../assets/images/sevenSlot_250x250.png'

const handleChange = (e) => {
    console.log(e);
}

const Container = () => {
  
    

    return (
        <>
            {/* <Stage>
                <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" x={100} y={100} />
            </Stage> */}

            {/* kako bih ja napravio u html-u */}
            <div className="dashboard">
                <div>
                    <h1>Epic Joker</h1>
                </div>
                <div className="slot">
                    <div className="reel">
                        <div className="item"><img src={banana}/></div>
                        {/* <div className="item"><img src={lemon}/></div> */}
                        <div className="item"><img src={cherry}/></div>
                        <div className="item"><img src={seven}/></div>
                    </div>
                    {/* <div className="positioned">
                        <hr/> ovo je linija pogodtka
                    </div> */}

                    <div className="reel">
                        <div className="item"><img src={cherry}/></div>
                        <div className="item"><img src={banana}/></div>
                        <div className="item"><img src={seven}/></div>
                        {/* <div className="item"><img src={lemon}/></div> */}
                    </div>
                    <div className="reel">
                        {/* <div className="item"><img src={lemon}/></div> */}
                        <div className="item"><img src={banana}/></div>
                        <div className="item"><img src={seven}/></div>
                        <div className="item"><img src={cherry}/></div>
                    </div>
                </div>
                <div className="inputs">
                    <div className="inputField">
                        <input type="number" value='500' onChange={handleChange} />
                        <p>CREDITS</p>
                    </div>
                    <div className="inputField">
                        <input type="number" value='5' onChange={handleChange} />
                        <p>BET</p>
                    </div>
                    <div className="inputField">
                        <input type="number" value='10' onChange={handleChange} />
                        <p>WINNER PAID</p>
                    </div>
                </div>
                <div className="buttons">
                    <div className="buttonItem bet"><button>BET ONE</button></div>
                    <div className="buttonItem bet"><button>BET MAX</button></div>
                    <div className="buttonItem spin"><button>SPIN</button></div>
                </div>
            </div>
        </>
    )
}

export default Container;