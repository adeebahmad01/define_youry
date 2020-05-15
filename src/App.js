import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import routes from "./routes";

import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;

