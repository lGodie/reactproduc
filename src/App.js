import React from "react";
import Product from "./components/Product";
import Title from "./components/Title";
import "./App.css";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    const Url = `http://localhost:3001/product/`;

    this.state = {
      products: []
    };

    axios
      .get(Url)
      .then(response => {
        this.setState({ products: response.data.products });
      })
      .catch(error => {
        console.log(error);
      });
  }

  delete(ev) {
    const Url = `http://localhost:3001/product/`;

    axios
      .get(Url)
      .then(response => {
        this.setState({ products: response.data.products });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="card card-body">
        <div>
          <Title title={"products"} />
        </div>
        <table class="table">
          <div className="card card-body">
            <div className="row">
              <div className="col-md-4 mx-auto">
                <form>
                  <ul>
                    {this.state.products.map(products => (
                      <tr key={products._id}>
                        <th>name</th> <td>{products.name}</td>
                        <th>description</th> <td>{products.description}</td>
                        <th>price</th> <td>{products.price}</td>
                      </tr>
                    ))}
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </table>
      </div>
    );
  }
}

export default App;
