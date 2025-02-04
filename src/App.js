import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ButtonGen from "./Features/ButtonGen/ButtonGen";
import ShadowGen from "./Features/ShadowGen/shadowgen";
import BorderGen from "./Features/BorderGen/BorderGen";

function App() {
  const [section, setSection] = useState('buttongen')
  const handleSection = (e) => {
    console.log(e.target.id)
    setSection(e.target.id)
  }
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ul className="features">
          <li id='buttongen' style={section === 'buttongen' ? { borderBottomColor: "rgb(79, 199, 238)", scale: "0.99" } : null} onClick={(e) => handleSection(e)}>Button Gen</li>
          <li id='shadowgen' style={section === 'shadowgen' ? { borderBottomColor: "rgb(79, 199, 238)", scale: "0.99" } : null} onClick={(e) => handleSection(e)}>Shadow Gen</li>
          <li id='bordergen' style={section === 'bordergen' ? { borderBottomColor: "rgb(79, 199, 238)", scale: "0.99" } : null} onClick={(e) => handleSection(e)}>Border Gen</li>
        </ul>
        <section >
          {section === 'buttongen' && <ButtonGen />}
          {section === 'shadowgen' && <ShadowGen />}
          {section === 'bordergen' && <BorderGen />}
        </section>
      </div>
    </div>
  );
}

export default App;
