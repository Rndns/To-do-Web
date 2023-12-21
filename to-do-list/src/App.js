import "./App.css";
import React, {useEffect, useState} from "react";
import Login from "./Login";

function App() {
  useEffect(() => 
  console.log('useEffect') 
  );

  return (
  <div>
    <Login></Login>
  </div>
  );
}
export default App;


