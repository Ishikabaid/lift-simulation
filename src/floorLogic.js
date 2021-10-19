import { useState } from "react";

const FloorLogic = () => {
    const [currentFloor, setcurrentFloor] = useState('0');

    function switchFloor(e) {
        const presentFloor = e.target.id;
        setcurrentFloor(presentFloor);
    }

    return (
        <div className="floorsContainer">
            <nav className="navbar" >
                <h1 className="heading">Lift Simulation</h1>
                <div className="inputDiv">
                    <div className="inputs">
                        <label htmlFor="numfloors">Enter No. of Floors</label>
                        <input type="number" id="numfloors" cols="1" rows="1" placeholder="Floors"/>
                    </div>
                    <div className="inputs">
                        <label htmlFor="numlifts">Enter No. of Lifts</label>
                        <input type="number" id="numlifts" cols="1" rows="1" placeholder="Lifts"/>
                    </div>
                </div>
            </nav>
            
            <div className="floor" id="first">
                <div>
                    <button
                        className="button b1"
                        id="3"
                        onClick={(e) => switchFloor(e)}
                    >
                    DOWN
                    </button>
                </div>
                <h3>FLOOR 3</h3>
            </div>

            <div className="floor">
                <div>
                    <button
                        className="button b2"
                        id="2"
                        onClick={(e) => switchFloor(e)}
                    >
                    UP
                    </button>
                    <br />
                    <button
                        className="button b1"
                        id="2"
                        onClick={(e) => switchFloor(e)}
                    >
                    DOWN
                    </button>
                </div>
                <h3>FLOOR 2</h3>
            </div>

            <div className="floor">
                <div>
                    <button
                        className="button b2"
                        id="1"
                        onClick={(e) => switchFloor(e)}
                    >
                    UP
                    </button>
                    <br />
                    <button
                        className="button b1"
                        id="1"
                        onClick={(e) => switchFloor(e)}
                    >
                    DOWN
                    </button>
                </div>
                <h3>FLOOR 1</h3>
            </div>

            <div className="floor">
                <div>
                    <button
                        className="button b2"
                        id="0"
                        onClick={(e) => switchFloor(e)}
                    >
                    UP
                    </button>
                </div>
                <h3>BASEMENT</h3>
            
                <div
                    className="lift"
                    style={{ transform: `translateY(${-currentFloor * "140"}px)` }}
                ></div>
            </div>
            <div className="footer">
            <footer>The contents of this website are deployed from this <a href="https://github.com/Ishikabaid/lift-simulation">repo</a>.</footer>
            </div>
        </div>
    
    );
}

export default FloorLogic;