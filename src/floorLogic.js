import { useState } from "react";

const FloorLogic = () => {
    const [currentFloor, setcurrentFloor] = useState('0');

    function switchFloor(e) {
        const presentFloor = e.target.id;
        setcurrentFloor(presentFloor);
    }

    return (
        <div className="floorsContainer">
            <h1>Lift Simulation</h1>
       
            <div className="floor">
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