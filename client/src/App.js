import DialogsWindow from "./components/DialogsWindow/DialogsWindow";
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 style={ {marginBottom: "32px"} }>Рабочий стол</h1>
      <div className="GRID">
        <DialogsWindow />
      </div>
    </div>
  );
}

export default App;
