import React from "react";
import "./App.css";

class Carousel extends React.Component {
  state = {
    activeImage: 0,
    totalImages: 0,
  };

  componentDidMount() {
    document.addEventListener("keyup", (event) => {
      const modal = document.querySelector(".modal");
      if (event.keyCode === 27 && modal.style.display !== "none") {
        modal.style.display = "none";
      }
    });
  }

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
      });
    };
  };

  scroll = (next) => {
    const { activeImage } = this.state;
    const moveToImage = next ? activeImage + 1 : activeImage - 1;

    document
      .getElementById(`img-${moveToImage}`)
      .scrollIntoView({ behavior: "smooth" });

    this.setState({
      activeImage: moveToImage,
    });
  };

  enlargeImage = (event) => {
    const modal = document.querySelector(".modal");
    modal.childNodes[0].src = event.target.src;
    modal.style.display = "flex";
  };

  hideModal = () => {
    document.querySelector(".modal").style.display = "none";
  };

  render() {
    const { activeImage, totalImages } = this.state;

    return (
      <div className="App">
        <div className="image-upload-area">
          <input
            type="file"
            accept="image/*"
            name="file"
            onChange={this.addImage}
          />
        </div>
        <div className="carousel-wrapper">
          {totalImages > 1 && activeImage !== 1 && (
            <div className="prev control" onClick={() => this.scroll(false)}>
              &lt;
            </div>
          )}
          <div className="carousel" onClick={this.enlargeImage}></div>
          {activeImage < totalImages && totalImages > 1 && (
            <div className="next control" onClick={() => this.scroll(true)}>
              &gt;
            </div>
          )}
        </div>
        <div className="modal">
          <img src="" alt="" />
          <button onClick={this.hideModal}>X</button>
        </div>
      </div>
    );
  }
}

export default Carousel;
