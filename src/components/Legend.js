import React from 'react';

const Legend = () => {
    return (
        <>
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
        </>
    );
};

export default Legend;
