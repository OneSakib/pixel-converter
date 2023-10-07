import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      px_to_vw_1: "",
      px_to_vw_2: "",
      px_to_vh_1: "",
      px_to_vh_2: "",
      vw_to_px_1: "",
      vw_to_px_2: "",
      vh_to_px_1: "",
      vh_to_px_2: "",
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerCopy = this.handlerCopy.bind(this);
    this.screenHeight = screen.height;
    this.screenWidth = screen.width;
  }
  handlerCopy(value) {
    if (value.length > 0) {
      // Copy the text inside the text field
      navigator.clipboard.writeText(value);
      toast.success("Copied");
    } else {
      toast.error("Empty value will not copy!");
    }
  }
  convert_px_vw(value) {
    return ((value * 100) / this.screenWidth).toFixed(3);
  }
  convert_px_vh(value) {
    return ((value * 100) / this.screenHeight).toFixed(3);
  }
  convert_vw_px(value) {
    return ((value * this.screenWidth) / 100).toFixed(3);
  }
  convert_vh_px(value) {
    return ((value * this.screenHeight) / 100).toFixed(3);
  }

  handlerChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    const re = /^[0-9\b.]+$/;
    // if value is not blank, then test the regex
    if (re.test(value)) {
      this.setState({
        [name]: value,
      });
      // px_to_vw_1
      if (name === "px_to_vw_1") {
        this.setState({ px_to_vw_2: this.convert_px_vw(value) });
      }
      // px_to_vh_1
      if (name === "px_to_vh_1") {
        this.setState({ px_to_vh_2: this.convert_px_vh(value) });
      }
      // vw_to_px_1
      if (name === "vw_to_px_1") {
        this.setState({ vw_to_px_2: this.convert_vw_px(value) });
      }
      // vh_to_px_1
      if (name === "vh_to_px_1") {
        this.setState({ vh_to_px_2: this.convert_vh_px(value) });
      }
    }
  }
  render() {
    return (
      <div className="">
        <Header />
        <main className="container mt-3 mb-5">
          <h6 className="text-center text-decoration-underline">Pixel to VW</h6>
          <div className="row">
            <div className="col-5">
              <div className="input-group form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="pixel-vw-1"
                  placeholder="10"
                  name="px_to_vw_1"
                  value={this.state.px_to_vw_1}
                  onChange={this.handlerChange}
                />
                <label htmlFor="pixel-vw-1">Pixel</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.px_to_vw_1);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
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
                  type="text"
                  className="form-control"
                  id="pixel-vw-2"
                  placeholder="10"
                  name="px_to_vw_2"
                  value={this.state.px_to_vw_2}
                  onChange={this.handlerChange}
                />
                <label htmlFor="pixel-vw-2">VW</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.px_to_vw_2);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h6 className="text-center text-decoration-underline">Pixel to VH</h6>
          <div className="row">
            <div className="col-5">
              <div className="input-group form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="pixel-vh-1"
                  placeholder="10"
                  name="px_to_vh_1"
                  value={this.state.px_to_vh_1}
                  onChange={this.handlerChange}
                />
                <label htmlFor="pixel-vh-1">Pixel</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.px_to_vh_1);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
                className="cursor-pointer"
                src="src/assets/images/exchange.png"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div className="col-5">
              <div className="form-floating input-group">
                <input
                  type="text"
                  className="form-control"
                  id="pixel-vh-2"
                  placeholder="10"
                  name="px_to_vh_2"
                  value={this.state.px_to_vh_2}
                  onChange={this.handlerChange}
                />
                <label htmlFor="pixel-vh-2">VH</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.px_to_vh_2);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h6 className="text-center text-decoration-underline">VW to Pixel</h6>
          <div className="row">
            <div className="col-5">
              <div className="input-group form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="vw-pixel-1"
                  placeholder="10"
                  name="vw_to_px_1"
                  value={this.state.vw_to_px_1}
                  onChange={this.handlerChange}
                />
                <label htmlFor="vw-pixel-1">VW</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.vw_to_px_1);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
                className="cursor-pointer"
                src="src/assets/images/exchange.png"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div className="col-5">
              <div className="form-floating input-group">
                <input
                  type="text"
                  className="form-control"
                  id="vw-pixel-2"
                  placeholder="10"
                  name="vw_to_px_2"
                  value={this.state.vw_to_px_2}
                  onChange={this.handlerChange}
                />
                <label htmlFor="vw-pixel-2">Pixel</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.vw_to_px_2);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h6 className="text-center text-decoration-underline">VH to Pixel</h6>
          <div className="row">
            <div className="col-5">
              <div className="input-group form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="vh-pixel-1"
                  placeholder="10"
                  name="vh_to_px_1"
                  value={this.state.vh_to_px_1}
                  onChange={this.handlerChange}
                />
                <label htmlFor="vh-pixel-1">VH</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.vh_to_px_1);
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            <div className="col-2 text-center">
              <img
                className="cursor-pointer"
                src="src/assets/images/exchange.png"
                width={"50px"}
                height={"50px"}
              />
            </div>
            <div className="col-5">
              <div className="form-floating input-group">
                <input
                  type="text"
                  className="form-control"
                  id="vh-pixel-2"
                  placeholder="10"
                  name="vh_to_px_2"
                  value={this.state.vh_to_px_2}
                  onChange={this.handlerChange}
                />
                <label htmlFor="vh-pixel-2">Pixel</label>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={(e) => {
                    this.handlerCopy(this.state.vh_to_px_2);
                  }}
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
