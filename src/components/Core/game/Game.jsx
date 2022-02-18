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

    function playGame() {
        setPlay(true);
        setTimeout(() => {
            setPlay(false)
        }, 700)

        // looping through all 3 slots to start rolling
        this.slotRef.forEach((slot, i) => {
            // this will trigger rolling effect
            const selected = this.triggerSlotRotation(slot.current);
            this.setState({ [`fruit${i + 1}`]: selected });
        });

         // this will create a rolling effect and return random selected option
    //     triggerSlotRotation = ref => {
    //         function setTop(top) {
    //         ref.style.top = `${top}px`;
    //         }
    //         let options = ref.children;
    //         let randomOption = Math.floor(
    //         Math.random() * Slots.defaultProps.fruits.length
    //         );
    //         let choosenOption = options[randomOption];
    //         setTop(-choosenOption.offsetTop + 2);
    //         return Slots.defaultProps.fruits[randomOption];
    //     };
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

            <div className="score-board">
                {/* CREDIT */}
                <div className="score">
                    <div className="value">
                        {credit}
                    </div>
                    <div>
                        <p>CREDITS</p>
                    </div>
                </div>
                {/* BET */}
                <div className="score">
                    <div>
                        <button onClick={minusBet}>-</button>
                    </div>
                    <div className="value">
                        {bet}
                    </div>
                    <div>
                        <button onClick={addBet}>+</button>
                    </div>
                    <div>
                        <p>BET</p>
                    </div>
                   
                </div>
                {/* WIN */}
                <div className="score">
                   <div className="value">
                       {win}
                    </div> 
                    <div>
                        <p>WINNER PAID</p>
                    </div>
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