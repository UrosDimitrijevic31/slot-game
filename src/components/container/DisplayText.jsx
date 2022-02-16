import React from 'react';
import { ITextStyle, TextStyle } from "pixi.js";
import { Text } from '@inlet/react-pixi';

export default function DisplayText(props) {

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
        <Text
            text={props.name}
            anchor={0.5}
            x={props.x}
            y={props.y}
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
    )
}