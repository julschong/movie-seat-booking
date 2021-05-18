import './App.css';
import { useState } from 'react';
import MovieSelect from './MovieSelect';
import Legend from './Legend';
import Seats from './Seats';
import Total from './Total';

function App() {
    const [ticketPrice, setTicketPrice] = useState(10);

    return (
        <div className="App">
            <MovieSelect setTicketPrice={setTicketPrice} />
            <Legend />
            <Seats rowCount={6} colCount={10} />
            <Total ticketPrice={ticketPrice} />
        </div>
    );
}

export default App;
