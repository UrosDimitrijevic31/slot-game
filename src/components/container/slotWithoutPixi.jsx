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

const { Stage, Container, Sprite, withPixiApp } = ReactPixi;

const image = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png";

const width = 500;
const height = 500;

const ContainerExample = withPixiApp (
    class extends React.Component {
    i = 0;

    state = {
        x: 0,
        rotate: 0,
        scale: 1
    };

    componentDidMount() {
        this.props.app.ticker.add(this.tick);
    }

    componentWillUnmount() {
        this.props.app.ticker.remove(this.tick);
    }

    tick = (delta) => {
        this.i += 0.05 * delta;
        this.setState((state) => ({
        x: Math.sin(this.i) * (width / 10),
        rotate: (Math.cos(this.i) * width) / 100,
        scale: 1 + Math.sin(this.i) * 0.5
        }));
    };

    render() {
        const { x, rotate, scale } = this.state;
        return (
        <Container
            rotation={rotate}
            pivot={50}
            position={[width / 2, height / 2]}
            scale={scale}
        >
            <Sprite anchor={0.5} image={image} x={0} y={0} />
            <Sprite anchor={0.5} image={image} x={50} y={50} />
            <Sprite anchor={0.5} image={image} x={100} y={100} />
        </Container>
        );
    }
    }
);

const App = () => (
    <Stage width={500} height={500} options={{ backgroundColor: 0xeef1f5 }}>
        <ContainerExample />
    </Stage>
);

ReactDOM.render(<App />, document.body);