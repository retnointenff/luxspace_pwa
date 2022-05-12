import React from "react";
import Arrived from "./component/arrived";
import Aside from "./component/aside";
import Browse from "./component/browse";
import Client from "./component/client";
import Footer from "./component/footer";
import Header from "./component/header";
import Hero from "./component/hero";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function () {
    (async function () {
      const response = await fetch(
        "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
        {
          headers: {
            "Content-type": "application/json",
            accept: "application/json",
            "x-api-key": process.env.REACT_APP_APIKEY,
          },
        }
      );
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Client />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
