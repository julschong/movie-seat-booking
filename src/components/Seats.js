import React from 'react';
import SeatRow from './SeatRow';

const Seats = ({ rowCount, colCount, setTicketPrice }) => {
    return (
        <div className="container">
            {[...Array(rowCount)].map((e, i) => (
                <SeatRow key={`row${i}`} row={i} colCount={colCount} />
            ))}
        </div>
    );
};

export default Seats;
