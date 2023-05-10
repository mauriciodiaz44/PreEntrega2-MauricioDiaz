import React from "react";
import Filters from "../components/Products/Filters";
import ListProducts from "../components/Products/ListProducts";
import Sorting from "../components/Products/Sorting";

const Productos = () => {
  return (
    <div className="product__page">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <Filters />
          </div>
          <div className="col-12 col-lg-9">
            <Sorting />
            <ListProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;