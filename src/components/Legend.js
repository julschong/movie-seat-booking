import React from 'react';

const Legend = () => {
    return (
        <>
            <ul className="legend flex">
                <li className="legend-opt flex">
                    <div className="seat bg-gray"></div>
                    N/A
                </li>
                <li className="legend-opt flex">
                    <div className="seat bg-teal"></div>
                    Selected
                </li>
                <li className="legend-opt flex">
                    <div className="seat bg-white"></div>
                    Occupied
                </li>
            </ul>
            <div className="screen"></div>
        </>
    );
};

export default Legend;
