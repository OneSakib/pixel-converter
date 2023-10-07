import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  exchange() {
    console.log("Exchange");
  }
  render() {
    return (
      <div className="">
        <Header />
        <main className="container mt-5 mb-5">
          <h6 className="text-center text-decoration-underline">
            Pixel to VW (Viewport width)
          </h6>
          <div className="row">
            <div className="col-5">
              <div className="input-group form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="vw-pixel"
                  placeholder="10"
                />
                <label htmlFor="vw-pixel">Pixel</label>
                <button className="btn btn-outline-secondary" type="button">
                  Copy
                </button>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
                onClick={this.exchange}
                className="cursor-pointer"
                src="src/assets/images/exchange.png"
                width={"50px"}
                height={"50px"}
                data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-content="Disabled popover"
              />
            </div>
            <div className="col-5">
              <div className="form-floating input-group">
                <input
                  type="number"
                  className="form-control"
                  id="px-to-vw"
                  placeholder="10"
                />
                <label htmlFor="px-to-vw">Viewport width</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h6 className="text-center text-decoration-underline">
            Pixel to VH (Viewport height)
          </h6>
          <div className="row">
            <div className="col-5">
              <div className="input-group form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="vh-pixel"
                  placeholder="10"
                />
                <label htmlFor="vh-pixel">Pixel</label>
                <button className="btn btn-outline-secondary" type="button">
                  Copy
                </button>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
                onClick={this.exchange}
                className="cursor-pointer"
                src="src/assets/images/exchange.png"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div className="col-5">
              <div className="form-floating input-group">
                <input
                  type="number"
                  className="form-control"
                  id="px-to-vh"
                  placeholder="10"
                />
                <label htmlFor="px-to-vh">Viewport height</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
