import React, { PropTypes } from 'react';

const DeckCard = (props) => {
    return (
        <div>
            <span>{props.name}</span>
        </div>
    );
};

DeckCard.propTypes = {
    name: PropTypes.string
};

export default DeckCard;
