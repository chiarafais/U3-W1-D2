import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import WelcomeAlert from "./Components/WelcomeAlert";
import AllTheBooks from "./Components/AllTheBooks";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav brandName="EpiBooks" />
      <WelcomeAlert />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
