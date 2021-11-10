import React from "react";
import propTypes from 'prop-types';

const DialogsListItem = (props) => {
  return (
    <div className="dialogs-list-item">
      <div className="dialog-list-item__poster">
        {props.dialogTitle[0]}
      </div>
      <div className="dialog-list-item__content">
        <h4 className="dli__title">
          {props.dialogTitle}
        </h4>
        <div className="dli__last-message">
          <p className="dli__last-message__sender">{props.dialogMessages[0].sender}</p>
          <p className="dli__last-message__text">{props.dialogMessages[0].text}</p>
        </div>
      </div>
    </div>
  )
}

DialogsListItem.propTypes = {
  dialogTitle: propTypes.string,
  dialogMessages: propTypes.array
}

export default DialogsListItem;