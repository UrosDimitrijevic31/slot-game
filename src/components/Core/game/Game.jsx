import React, { useState, useEffect } from 'react';
import './Game.css';
import Reel from '../reel/Reel';

const Game = () => {
    const [credit, setCredit] = useState(1000);
    const [bet, setBet]       = useState(1);
    const [win, setWin]       = useState(0);
    const [play, setPlay]     = useState(false);

    


    useEffect(() => {
        // console.log('ovo je useeffect');
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

    return (
        <div className="dashboard">
            <div>
                <h1>Epic Joker</h1>
            </div>
            <div className="slot">
                <Reel />   
                <Reel />  
                <Reel />   
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
        </div> 
    )
}

export default Game;