import "./App.css";
import Card from "./components/Card.tsx";
import LeftBar from "./components/LeftBar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className="main">
        <div className="header">ToDo List</div>
        <div className="appcontent">
          <LeftBar></LeftBar>
          <Card></Card>
          <Card></Card>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
