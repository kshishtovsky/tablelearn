import React from "react";
import propTypes from "prop-types";

const DialogsListTitle = (props) => {
  return (
    <div className="dialogs-list-title" onClick={props.setListStatus}>
      <div className="container dialogs-list-title--wrapper">
        <div className="__dialogs-list-title--wrapper">
          <div className="dialogs-list-title__line" />
          <p className="__dialogs-list-title">{props.title}</p>
        </div>
        <img
          src={require("../../assets/icons/arrow-control.svg").default}
          alt=""
        />
      </div>
    </div>
  );
};

DialogsListTitle.propTypes = {
  title: propTypes.string,
};

const DialogsListItem = (props) => {
  return (
    <div
      onClick={props.openDialog.bind(this, props.dialogId)}
      className="dialogs-list-item"
    >
      <div className="dialogs-list-item--wrapper container">
        <div className="dialog-list-item__poster">{props.dialogTitle[0]}</div>
        <div className="dialog-list-item__content">
          <h4 className="dli__title">{props.dialogTitle}</h4>
          <div className="dli__last-message">
            <p className="dli__last-message__sender">
              {props.dialogMessages[0].sender}:
            </p>
            <p className="dli__last-message__text">
              {props.dialogMessages[0].text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DialogsListItem.propTypes = {
  dialogTitle: propTypes.string,
  dialogMessages: propTypes.array,
};

export default DialogsListItem;
