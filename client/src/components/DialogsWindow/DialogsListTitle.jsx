import React from "react";
import propTypes from "prop-types";

const DialogsListTitle = (props) => {
  return (
    <div className="dialogs-list-title" onClick={props.setListStatus}>
      <div className="container dialogs-list-title--wrapper">
        <div className="__dialogs-list-title--wrapper">
          <div className="dialogs-list-title__line"/>
          <p className="__dialogs-list-title">{props.title}</p>
        </div>
        <img src={require("../../assets/icons/arrow-control.svg").default} alt=""/>
      </div>
    </div>
  )
}

DialogsListTitle.propTypes = {
  title: propTypes.string
}

export default DialogsListTitle;