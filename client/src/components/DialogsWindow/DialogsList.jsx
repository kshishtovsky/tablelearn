import React, { useRef, useState } from "react";
import DialogsListTitle from "./DialogsListTitle";
import DialogsListItem from "./DialogsListItem";
import DialogFull from "./DialogFull";

const DialogsList = (props) => {

  const dialogs = [
    {
      id: 24201,
      dialogTitle: "МДК 08.02",
      dialogMessages: [
        {
          sender: "Ганеев",
          text: "Здравствуйте, понял"
        },
        {
          sender: "Ганеев",
          text: "Понял, здравствуйте"
        },
      ]
    },
    {
      id: 24202,
      dialogTitle: "МДК 08.01",
      dialogMessages: [
        {
          sender: "Довгаль",
          text: "Здравствуйте, понял"
        },
        {
          sender: "Дятлов",
          text: "Понял, здравствуйте"
        },
      ]
    }
  ]

  const [dialogIsOpened, setDialogOpened] = useState(false)
  const [listIsOpened, setListOpened] = useState(true)

  const openDialog = () => {
    setDialogOpened(true)
  }

  const closeDialog = () => {
    setDialogOpened(false)
  }

  const setListStatus = () => {
    setListOpened(!listIsOpened)
  }

  const ref = useRef()

  return (
    <div className="dialogs-list">
      <DialogsListTitle title={"По курсам"} setListStatus={setListStatus} />
      {
        listIsOpened === true &&
        <>
          {
            dialogIsOpened === false &&
            <div className="dialogs">
              {
                dialogs.map(dialog => (
                  <DialogsListItem
                    key={dialog.id}
                    dialogId={dialog.id}
                    dialogTitle={dialog.dialogTitle}
                    dialogMessages={dialog.dialogMessages}
                    openDialog={openDialog}
                  />
                ))
              }
            </div>
          }
          {
            dialogIsOpened === true &&
            <DialogFull
              sender={"Ганеев"}
              text={"боба"}
              closeDialog={closeDialog}
            />
          }
        </>
      }
    </div>
  )
}

export default DialogsList;