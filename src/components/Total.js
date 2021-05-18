import React from 'react';
import { useSelector } from 'react-redux';

const Total = ({ ticketPrice }) => {
    const seatCount = useSelector((state) => state);

    return (
        <div className="total">
            You have selected <span className="clr-aqua">{seatCount}</span>{' '}
            seats for total price of $
            <span className="clr-aqua">{ticketPrice * seatCount}</span>
        </div>
    );
};

export default Total;
