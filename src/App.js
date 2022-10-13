import "./App.css";
import Header from "./Components/Header/Header";
import ClickCounter from "./Components/Header/ClickCounter/ClickCounter";

function App() {
  return (
    <div className="App">
      <Header>
        <ClickCounter />
      </Header>
    </div>
  );
}

export default App;
