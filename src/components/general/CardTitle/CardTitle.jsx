import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = props => {
    return (
        <div className={"card-title--wrapper"}>
            <p className={"card-title"}>{props.title}</p>
            <img src={require("../../../assets/icons/arrow-open-card.svg").default} alt=""/>
        </div>
    );
};

CardTitle.propTypes = {
    title: PropTypes.string
};

export default CardTitle;
