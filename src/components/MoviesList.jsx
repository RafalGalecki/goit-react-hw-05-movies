import React from "react";
import PropTypes from 'prop-types';

const MoviesList = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>{children}</ul>
        </div>
    )
};

MoviesList.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default MoviesList;