import React from 'react';
import Seat from './Seat';

const SeatRow = ({ row }) => {
    return (
        <div className="row flex">
            {[...Array(6)].map((e, i) => (
                <Seat key={`row${row}col${i}`} row={row} col={i} />
            ))}
        </div>
    );
};

export default SeatRow;
