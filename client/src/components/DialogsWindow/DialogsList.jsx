import React, { useState } from "react";
import DialogsListTitle from "./DialogsListTitle";
import DialogsListItem from "./DialogsListItem";
import DialogFull from "./DialogFull";

import { observer } from "mobx-react";

const DialogsList = observer(({ users }) => {
  const [dialogIsOpened, setDialogOpened] = useState(false);
  const [listIsOpened, setListOpened] = useState(true);

  const openDialog = () => {
    setDialogOpened(true);
  };

  const closeDialog = () => {
    setDialogOpened(false);
  };

  const setListStatus = () => {
    setListOpened(!listIsOpened);
  };

  return (
    <div className="dialogs-list">
      <DialogsListTitle title={"По курсам"} setListStatus={setListStatus} />
      {listIsOpened === true && (
        <>
          {dialogIsOpened === false && (
            <div className="dialogs">
              {users.users.map((dialog) => (
                /*<DialogsListItem
                    key={dialog.id}
                    dialogId={dialog.id}
                    dialogTitle={dialog.dialogTitle}
                    dialogMessages={dialog.dialogMessages}
                    openDialog={openDialog}
                  />*/
                <p>{dialog.user_name}</p>
              ))}
            </div>
          )}
          {dialogIsOpened === true && (
            <DialogFull
              sender={"Ганеев"}
              text={"боба"}
              closeDialog={closeDialog}
            />
          )}
        </>
      )}
    </div>
  );
});

export default DialogsList;
