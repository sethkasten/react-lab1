import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Ad from "./components/Ad";
import Header from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Seth Kasten" />
      <div className="ads-container">
        <Ad flavor="Chocolate" fontSize={50} darkTheme={true} />
        <Ad flavor="Vanilla" fontSize={50} darkTheme={false} />
        <Ad flavor="Strawberry" fontSize={50} darkTheme={true} />
      </div>
      <main className="main">
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
