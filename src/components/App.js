import './App.css';

function App() {
    return (
        <div className="App">
            <section className="picking flex">
                <p>Pick a move: </p>
                <select name="move-select" id="move-select">
                    <option name="move-select" value="hello">
                        hello
                    </option>
                </select>
            </section>
            <ul className="legend flex">
                <li className="legend-opt flex">
                    <div className="icon bg-gray"></div>
                    N/A
                </li>
                <li className="legend-opt flex">
                    <div className="icon bg-teal"></div>
                    Selected
                </li>
                <li className="legend-opt flex">
                    <div className="icon bg-white"></div>
                    Occupied
                </li>
            </ul>
            <div className="screen"></div>
            <div className="container">
                <div className="row flex">
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                </div>
                <div className="row flex">
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                </div>
                <div className="row flex">
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                </div>
                <div className="row flex">
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                </div>
                <div className="row flex">
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                </div>
                <div className="row flex">
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon"></div>
                    <div className="icon bg-gray"></div>
                    <div className="icon bg-gray"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
