import "./App.css";
import GridCardContainer from "./Components/Layout/GridCardContainer";
import Home from "./Components/Layout/Home";
import Main from "./Components/Main/Main";

function App() {
  
  return (
    <>
      <Home>
        <Main />
        <GridCardContainer/>
      </Home>
    </>
  );
}

export default App;
