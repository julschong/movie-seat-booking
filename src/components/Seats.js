import React from 'react';
import { useSelector } from 'react-redux';
import SeatRow from './SeatRow';

const Seats = ({ rowCount, colCount }) => {
    const seats = useSelector((state) => state);

    return (
        <div className="container">
            {[...Array(6)].map((e, i) => (
                <SeatRow key={`row${i}`} row={i} />
            ))}
        </div>
    );
};

export default Seats;
