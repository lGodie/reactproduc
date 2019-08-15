import React from "react";

class ProductRow extends React.Component {
  render() {
    return (
      <li className="media">
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.description} &nbsp;
            <span className="label label-info">{this.props.price}</span>
          </p>
        </div>
        <hr />
      </li>
    );
  }
}

export default ProductRow;
