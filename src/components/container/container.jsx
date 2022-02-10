import React, { Component, useReducer, useRef } from 'react';
import { Stage, Sprite, useTick } from '@inlet/react-pixi'

const Container = () => {
  

    return (
        <Stage>
            <Sprite image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png" x={100} y={100} />
        </Stage>
    )
}

export default Container;