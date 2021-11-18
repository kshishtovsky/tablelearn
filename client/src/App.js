import Dialogs from "./components/DialogsWindow/Dialogs";
import Courses from "./components/Course/Course";
import Timetable from "./components/Timetable/Timetable";
import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: "32px" }}>Рабочий стол</h1>
      <div className="GRID">
        <Dialogs />
        <Courses />
      </div>
      <div className="GRID">
        <Timetable />
      </div>
    </div>
  );
}

export default App;
