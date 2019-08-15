import React from "react";
import ProductRow from "./ProductRow";

// const baseUrl = `http://localhost:3000/product/`;

class Product extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {this.props.listado.map(product => {
            return (
              <ProductRow
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Product;
