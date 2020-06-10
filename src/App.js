import React from "react";
import "./App.css";

class Carousel extends React.Component {
  state = {
    activeImage: null,
    totalImages: 0,
  };

  addImage = (event) => {
    const {
      target: { files = null },
    } = event;

    if (!files.length) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      document.querySelector(
        ".carousel"
      ).innerHTML += `<img id="${this.state.totalImages}-img" src=${e.target.result} class="carousel-image"></img>`;
      this.setState({
        totalImages: this.state.totalImages + 1,
      });
    };
  };

  render() {
    return (
      <div className="App">
        <div className="image-upload-area">
          <input type="file" name="file" onChange={this.addImage} />
          <div className="loaded-images"></div>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel">
            <div className="prev control">&lt;</div>
            <div className="next control">&gt;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;

// document.getElementById('i4').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
