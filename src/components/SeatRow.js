import React from 'react';
import Seat from './Seat';

const SeatRow = ({ row, colCount }) => {
    return (
        <div className="row flex">
            {[...Array(colCount)].map((e, i) => (
                <Seat key={`row${row}col${i}`} row={row} col={i} />
            ))}
        </div>
    );
};

export default SeatRow;
