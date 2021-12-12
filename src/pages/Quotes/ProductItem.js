import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProductItem({ item }) {
  return (
    <div className="productItemStyle">
      <q> {item.quote} </q>

      <b>
        :
        <Link to={`/quote/${item.quote_id}`} style={{ color: "black" }}>
          {item.author}{" "}
        </Link>
      </b>
    </div>
  );
}

export default ProductItem;
