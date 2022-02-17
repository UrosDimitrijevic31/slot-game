// import React, { useReducer, useRef, useState, useEffect, useCallback } from 'react';
// import { ITextStyle, TextStyle } from "pixi.js";
// const { Stage, Container, Sprite, withPixiApp } = ReactPixi;
// import { Stage, useTick, Container, rotation, Graphics } from '@inlet/react-pixi';



// const image = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

// const width = 500;
// const height = 500;

// const ContainerExample = withPixiApp (
//     class extends React.Component {
//         i = 0;

//         state = {
//             x: 0,
//             rotate: 0,
//             scale: 1
//         };

//         componentDidMount() {
//             this.props.app.ticker.add(this.tick);
//         }

//         componentWillUnmount() {
//             this.props.app.ticker.remove(this.tick);
//         }

//         tick = (delta) => {
//             this.i += 0.05 * delta;
//             this.setState((state) => ({
//             x: Math.sin(this.i) * (width / 10),
//             rotate: (Math.cos(this.i) * width) / 100,
//             scale: 1 + Math.sin(this.i) * 0.5
//             }));
//         };

//         render() {
//             const { x, rotate, scale } = this.state;
//             return (
//             <Container
//                 rotation={rotate}
//                 pivot={50}
//                 position={[width / 2, height / 2]}
//                 scale={scale}
//             >
//                 <Sprite anchor={0.5} image={image} x={0} y={0} />
//                 <Sprite anchor={0.5} image={image} x={50} y={50} />
//                 <Sprite anchor={0.5} image={image} x={100} y={100} />
//             </Container>
//             );
//         }
//     }
// );

// const App2 = () => (
//     <Stage width={500} height={500} options={{ backgroundColor: 0xeef1f5 }}>
//         <ContainerExample />
//     </Stage>
// );

// export default App2;
// ReactDOM.render(<App />, document.body);