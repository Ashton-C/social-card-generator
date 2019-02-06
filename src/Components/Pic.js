import React, { Component } from "react";
import "./Pic.css";

export default class Pic extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      file: "https://www.viawater.nl/files/default-user.png",
      imagePreviewUrl: "https://www.viawater.nl/files/default-user.png"
    };
  }
  handleSubmit(event) {
    console.log(this.state.imagePreviewUrl);
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
    // const img = new Image();
    // img.src = e.target.result;
    // const elem = document.createElement('canvas');
    // elem.width = width;
    // elem.height = height;
    // const ctx = elem.getContext('2d');
    // ctx.drawImage(img, 0, 0, width, height);
    // const data = ctx.canvas.toDataURL(img);
  }
  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    }
    return (
      <div className="Pic">
        <input
          type="file"
          id="avatar"
          onChange={e => this._handleImageChange(e)}
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <div className="imgPreview">{$imagePreview}</div>
      </div>
    );
  }
}
