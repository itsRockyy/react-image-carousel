import React from "react";
import "./App.css";

class Carousel extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="image-upload-area">
          <input type="file" name="" id="" />
          <div className="loaded-images"></div>
        </div>
        <div className="carousel">
          <img
            src="https://i.picsum.photos/id/848/200/200.jpg?hmac=9pGbbeC1Q-zsi7TeMrGb93-TjKBmqPVY-tYuubIIqyw"
            alt=""
            id="i2"
          />
          <img
            src="https://i.picsum.photos/id/492/200/200.jpg?hmac=XU2aUuiOp-6a1CXwWFsbEobU3xA-9upNSkJiJacygTM"
            alt=""
            id="i3"
          />
          <img
            src="https://i.picsum.photos/id/326/200/200.jpg?hmac=T_9V3kc7xrK46bj8WndwDhPuvpbjnAM3wfL_I7Gu6yA"
            alt=""
            id="i4"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;

// document.getElementById('i4').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
