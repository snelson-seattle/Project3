import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import "./css/shop.css";
import { Link } from "react-router-dom";
import API from "../utils/API";

function Shop() {
  const [mushrooms, setMushrooms] = useState([]);

  useEffect(() => {
    API.getMushrooms().then((res) => {
      setMushrooms(res.data);
    });
  }, []);

  return (
    <div className="shop">
      <Link to="/order"><button id="but" >Order</button></Link>
      <div className="container theList">
        {mushrooms.map((mushroom) => {
          return (
            <ProductCard
              key={mushroom._id}
              name={mushroom.name}
              image_url={mushroom.image_url}
              description={mushroom.description}
              family={mushroom.family}
              genus={mushroom.genus}
              species={mushroom.species}
              toxic={mushroom.toxic}
            ></ProductCard>

          );
        })}
      </div>
    </div>
  );
}

export default Shop;
