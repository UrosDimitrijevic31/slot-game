import React from 'react';

const Slot = () => {
    
    let banana = 0;
    let cherry = 0;
    let lemon  = 0;
    let seven  = 0;
    
    let reelOne = ["banana", "cherry", "lemon", "seven"] //treba da ih bude svih po 3 u reelu, da bi se ispostovala uspravna linija
    let reelOne = ["banana", "cherry", "lemon", "seven"] //treba da ih bude svih po 3 u reelu, da bi se ispostovala uspravna linija
    let reelOne = ["banana", "cherry", "lemon", "seven"] //treba da ih bude svih po 3 u reelu, da bi se ispostovala uspravna linija

    let bet = 1;
    let betMin = 1;
    let betMax = 100;
    let credit = 0;

    let arraySlot = [];
    
    if( array[00] == array[01] || array[10] == array[11] || array[20] == array[21] ) {
        console.log('you win');
    } else {
        console.log('you lose');
    }

    //play
    let spinHandler = (reelOne, reelTWo, realThree) => {
        if( credit === 0 ) {
            return console.log('You do not have enough credit');
        }
        // ovo treba da se uradi za sva tri rela, to je ustvari da promesa rilove, odnosno pozicije 
        let currentIndex = reelOne.length,  randomIndex;

        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [reelOne[currentIndex], reelOne[randomIndex]] = [
              reelOne[randomIndex], reelOne[currentIndex]];
          }
        
          return reelOne;
    }


    return (
        <>
            <h1>cao</h1>
        </>
    )
}

export default Slot;
