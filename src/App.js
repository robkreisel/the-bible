import React from "react";
import "./App.css";
import OTDetails from "./components/OTDetails";
import NTDetails from "./components/NTDetails";
import OTChronological from "./components/OTChronological";
// import Nav from "./components/Nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { bookList: "HsCat" };
  }

  handleClick(e) {
    this.setState({ bookList: e.target.value });
  }

  render() {
    const bookList = this.state.bookList;
    let displayedBookList;

    switch (bookList) {
      case "HsCat":
        displayedBookList = <OTDetails />;
        break;
      case "HsChron":
        displayedBookList = <OTChronological />;
        break;
      case "NcCat":
        displayedBookList = <NTDetails />;
        break;
      case "NcChron":
        displayedBookList = <NTDetails />;
        break;
      default:
        displayedBookList = <OTDetails />;
    }

    return (
      <div>
        {/* <Nav /> */}
        <div>
          <button
            className="rounded-none bg-gray-200 p-3 m-2"
            value="HsCat"
            onClick={this.handleClick}
          >
            HS-Cat
          </button>
          <button
            className="rounded-none bg-gray-200 p-3 m-2"
            value="NcCat"
            onClick={this.handleClick}
          >
            NC-Cat
          </button>
          <button
            className="rounded-none bg-gray-200 p-3 m-2"
            value="HsChron"
            onClick={this.handleClick}
          >
            HS-Chron
          </button>
          <button
            className="rounded-none bg-gray-200 p-3 m-2"
            value="NcChron"
            onClick={this.handleClick}
          >
            NC-Chron
          </button>
        </div>
        {displayedBookList}
      </div>
    );
  }
}

export default App;
