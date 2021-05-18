import React from 'react';

const MovieSelect = ({ setTicketPrice }) => {
    return (
        <section
            onChange={(e) => setTicketPrice(e.target.value)}
            className="picking flex"
        >
            <p>Pick a movie: </p>
            <select name="movie-select" id="movie-select">
                <option name="movie-select" value="10">
                    Pokemon ($10)
                </option>
                <option name="movie-select" value="12">
                    Spiral ($12)
                </option>
                <option name="movie-select" value="9">
                    Those Who Wish Me Dead ($9)
                </option>
                <option name="movie-select" value="7">
                    Profile ($7)
                </option>
            </select>
        </section>
    );
};

export default MovieSelect;
