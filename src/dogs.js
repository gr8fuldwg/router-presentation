import React, { useState, useEffect } from "react";
import waterdogs from "./waterdogs.jpg";
import waterdogs2 from "./waterdogs2.jpg";
import { Link } from "react-router-dom";


function Dogs() {
  useEffect(() => {
    fetchItems();
  }, []);

 const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
    );

    const items = await data.json();
    console.log(items);
    setItems(items.items);
  };



  return (
    <div className="Dogs">
      <h1>Dogs Underwater!</h1>
      <img src={waterdogs} height="600" width="760" alt="dogs underwater pic" />
      <hr />
      <img
        src={waterdogs2}
        height="584"
        width="800"
        alt="more dogs underwater pic"
      />
      {items.map(item => (
        <h1 key={item.itemid}>
          <Link to={`/dogs/${item.itemid}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Dogs;
