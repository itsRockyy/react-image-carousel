import React from "react";
import "./App.css";

class Carousel extends React.Component {
  state = {
    activeImage: 0,
    totalImages: 0,
    isPreviousEnabled: false,
    isNextEnabled: false,
  };

  addImage = (event) => {
    const {
      target: { files = null },
    } = event;

    if (!files.length) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const { activeImage, totalImages } = this.state;

      document.querySelector(".carousel").innerHTML += `<img id="img-${
        totalImages + 1
      }" src=${e.target.result} class="carousel-image"></img>`;

      this.setState({
        activeImage: totalImages === 0 ? 1 : activeImage,
        totalImages: totalImages + 1,
        isPreviousEnabled: true,
        isNextEnabled: true,
      });
    };
  };

  scroll = (next) => {
    const { activeImage, totalImages } = this.state;
    const moveToImage = next ? activeImage + 1 : activeImage - 1;

    document
      .getElementById(`img-${moveToImage}`)
      .scrollIntoView({ behavior: "smooth" });

    this.setState({
      activeImage: moveToImage,
      isNextEnabled: moveToImage !== totalImages ? true : false,
      isPreviousEnabled: moveToImage > 1 ? true : false,
    });
  };

  render() {
    const { isPreviousEnabled, isNextEnabled, activeImage } = this.state;

    return (
      <div className="App">
        <div className="image-upload-area">
          <input type="file" name="file" onChange={this.addImage} />
          <div className="loaded-images"></div>
        </div>
        <div className="carousel-wrapper">
          {isPreviousEnabled && activeImage !== 1 && (
            <div className="prev control" onClick={() => this.scroll(false)}>
              &lt;
            </div>
          )}
          <div className="carousel"></div>
          {isNextEnabled && (
            <div className="next control" onClick={() => this.scroll(true)}>
              &gt;
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Carousel;
