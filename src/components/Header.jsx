import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/pixel-converter">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M239.2 419.5l7 394.6h465.7V251.4H396.6v168.1z"
              fill="#E1F0FF"
            />
            <path d="M221 395.5h25.2v418.6H221z" fill="#446EB1" />
            <path
              d="M221 789.8h488.7v24.3H221zM366.7 227.1h342.9v24.3H366.7z"
              fill="#446EB1"
            />
            <path
              d="M687.6 227.1h24.3v98.1h-24.3zM687.6 765h24.3v49h-24.3zM384.6 244.1l-18.1-17L221 394.7l18.1 17 145.5-167.6z"
              fill="#446EB1"
            />
            <path d="M372.6 235.1h23.9v167.6h-23.9z" fill="#446EB1" />
            <path d="M221 395.5h175.6v23.9H221z" fill="#446EB1" />
            <path
              d="M776.4 570.2c-5.6 0-11.2 0.9-17.1 2.7L719 532.6 825.6 426c5.3-5.3 5.3-14 0-19.3-2.6-2.6-6-4-9.6-4-3.6 0-7.1 1.4-9.6 4L699.7 513.3 593.1 406.7c-2.6-2.6-6-4-9.6-4s-7.1 1.4-9.6 4c-5.3 5.3-5.3 13.9 0 19.3l106.6 106.6-40.3 40.3c-5.9-1.8-11.5-2.7-17.1-2.7-33.2 0-60.3 27-60.3 60.3 0 33.2 27 60.3 60.3 60.3 33.2 0 60.2-27 60.2-60.3 0-16.4-6.8-31.9-18.8-43.4l35.2-35.2 35.3 35.2c-12 11.4-18.8 26.9-18.8 43.4 0 33.2 27 60.3 60.3 60.3 33.2 0 60.3-27 60.3-60.3-0.2-33.2-27.2-60.3-60.4-60.3z m33 60.3c0 18.2-14.8 33-33 33s-33-14.8-33-33 14.8-33 33-33 33 14.8 33 33z m-153.4 0c0 18.2-14.8 33-33 33s-33-14.8-33-33 14.8-33 33-33 33 14.8 33 33z"
              fill="#6D9EE8"
            />
          </svg>
            Pixel Converter
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/pixel-converter">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
