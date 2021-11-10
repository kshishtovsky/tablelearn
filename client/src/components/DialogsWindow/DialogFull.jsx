import React from "react";
import propTypes from "prop-types";

const DialogFull = (props) => {
  return (
    <div className="dialog-full">
      <img onClick={props.closeDialog} src={require("../../assets/icons/arrow-open-window.svg").default} alt=""/>
      <div className="dialog-message">
        <p>{props.sender}</p>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

DialogFull.propTypes = {
  dialogMessages: propTypes.array
}

export default DialogFull