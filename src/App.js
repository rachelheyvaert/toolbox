import React from "react";
import NavBar from "./components/navigation/NavBar";
import MainContainer from "./components/MainContainer";


const App = () => {
  return (
<div style={{backgroundImage: "http://localhost:3000/image.png"}}>
  <NavBar />
  <MainContainer /> 
</div>
  );
}
export default App;
