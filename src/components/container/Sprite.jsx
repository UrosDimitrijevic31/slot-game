import React from 'react';
import { Sprite } from '@inlet/react-pixi';

export default function(props) {

    const bla = () => {
        console.log('radiiiiiiiiiiiiiiiiiiiii');
    }

    return(
        <Sprite width={props.width} 
                height={props.height} 
                image={props.image}
                x={props.x}
                // on={bla()}
                on={() => {
                    console.log('cao');
                }}
                click={() => {
                    console.log('cao');
                }}
                // addListener={nameFunction()} 
                y={props.y} />
    )
}