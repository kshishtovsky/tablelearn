import React from 'react';
import './WindowTitleStyle.scss'
import PropTypes from 'prop-types';

const WindowTitle = (props) => {
  return (
    <div className="window-title container">
      <div className={"window-title--wrapper"}>
        <p className={"__window-title"}>{props.title}</p>
        <div className="window-title__arrow">
          <img src={require("../../../assets/icons/arrow-open-window.svg").default} alt=""/>
        </div>
      </div>
    </div>
  );
};

WindowTitle.propTypes = {
  title: PropTypes.string
};

export default WindowTitle;