import "./App.css";
import "./assets/sass/Main.scss";
import Auxs from "./components/Auxs";
import "boxicons";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auxs />
      </BrowserRouter>
    </div>
  );
}

export default App;
