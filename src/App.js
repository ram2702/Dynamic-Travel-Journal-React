import React from "react";
import "./App.css";
import dataset from "./data";
import MockLoc from "./mockloc";
import Navbar from "./Navbar";
function App() {
  console.log(document.all);
  const item = dataset.map((soloDataSet) => {
    console.log(soloDataSet);
    return <MockLoc key={soloDataSet.id} soloDataSet={soloDataSet} />;
  });
  return (
    <div className="container">
      <Navbar />
      {item}
    </div>
  );
}

export default App;
