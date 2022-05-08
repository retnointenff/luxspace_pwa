import React from "react";
import Arrived from "./component/arrived";
import Aside from "./component/aside";
import Browse from "./component/browse";
import Client from "./component/client";
import Footer from "./component/footer";
import Header from "./component/header";
import Hero from "./component/hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Client />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
