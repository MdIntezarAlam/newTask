import React, { useState, useEffect } from "react";
import "./home.css";
const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://assessment.api.vweb.app/products`)
      .then((response) => response.json())
      .then((data) =>
        //   console.log(data)
        setData(data)
      );
  }, []);

  return (
    <div className="container">
      <h1 className="heading">List of Procucts & Details</h1>
      <div className="card">
        {data.map((item) => (
          <div className="item_one">
            <h1 className="headings">Select Producta...</h1>
            <div className="p_name">
              <span className="name">products Name</span>
              <button>{item.name}</button>
            </div>
            <div className="p_stock">
              <span>products in Stock</span>
              <button>{item.stock}</button>
            </div>
            <div className="p_price">
              <span>Selling Price</span>
              <button>{item.selling_price}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
