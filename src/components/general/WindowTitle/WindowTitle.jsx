import React from 'react';
import './WindowTitle.scss'
import PropTypes from 'prop-types';

const WindowTitle = (props) => {
  return (
    <div className={"card-title--wrapper"}>
      <p className={"card-title"}>{props.title}</p>
      <img src={require("../../../assets/icons/arrow-open-card.svg").default} alt=""/>
    </div>
  );
};

WindowTitle.propTypes = {
  title: PropTypes.string
};

export default WindowTitle;