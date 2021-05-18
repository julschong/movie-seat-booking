import './App.css';
import { useState } from 'react';
import MovieSelect from './MovieSelect';
import Legend from './Legend';
import Seats from './Seats';

function App() {
    const [ticketPrice, setTicketPrice] = useState(10);

    return (
        <div className="App">
            <MovieSelect setTicketPrice={setTicketPrice} />
            <Legend />
            <Seats rowCount={6} />
        </div>
    );
}

export default App;
