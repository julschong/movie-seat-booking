import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Seat = ({ row, col }) => {
    const [occupancy, setOccupancy] = useState(false);
    const dispatch = useDispatch();

    if (col === 2 || col === 7) {
        return <div className="aisle"></div>;
    }

    // simulate occupied
    if (col % 2 === 1 && row % 2 === 1) {
        return <div className="seat bg-white"></div>;
    }

    const toggleOccupancy = (e) => {
        if (occupancy) {
            dispatch({ type: 'off' });
        } else {
            dispatch({ type: 'on' });
        }
        setOccupancy(!occupancy);
    };

    return occupancy ? (
        <button className="seat bg-teal btn" onClick={toggleOccupancy}></button>
    ) : (
        <button className="seat bg-gray btn" onClick={toggleOccupancy}></button>
    );
};

export default Seat;
