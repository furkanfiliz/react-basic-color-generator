import React, { Component } from "react";
import "./ColorPickerGenerator.css";
import { SketchPicker } from "react-color";

class ColorPickerGenerator extends Component {
  colorPalet = [];

  colorPaletLight = [];

  colorPaletDark = [];

  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
  }

  componentDidMount() {
    this.setDidmountColor();
  }

  setDidmountColor = () => {
    const myColor = {
      hex: "#2684FE",
      rgb: {
        r: 38,
        g: 132,
        b: 254,
        a: 1,
      },
      hsl: {
        a: 1,
        h: 213.88888888888889,
        l: 0.5725490196078431,
        s: 0.9908256880733946,
      },
    };
    this.setState({
      color: myColor,
    });
    this.r = myColor.rgb.r;
    this.g = myColor.rgb.g;
    this.b = myColor.rgb.b;
    this.rdark = myColor.rgb.r;
    this.gdark = myColor.rgb.g;
    this.bdark = myColor.rgb.b;

    this.createColorPalette(14);
  };

  handleChange = (color) => {
    this.setState({ color });
    this.r = color.rgb.r;
    this.g = color.rgb.g;
    this.b = color.rgb.b;
    this.rdark = color.rgb.r;
    this.gdark = color.rgb.g;
    this.bdark = color.rgb.b;

    this.createColorPalette(14);
  };

  createColorPalette = (value) => {
    this.colorPalet = [];
    this.colorPaletLight = [];
    this.colorPaletDark = [];

    // const v = 255 / value;

    for (let i = 0; i < 12; i++) {
      // başlanguç rengi korumak içinn
      if (i !== 0) {
        console.log(i % 2);

        // renk tonlaması için
        this.r = this.r + value;
        this.g = this.g + value;
        this.b = this.b + value;
      }
      // const colorHex = this.rgbToHex(this.r, this.g, this.b);
      // edited
      // if (i % 2 === 0) {
        const getRed = this.r > 255 ? 255 : this.r;
        const getGreen = this.g > 255 ? 255 : this.g;
        const getBlue = this.b > 255 ? 255 : this.b;
        this.colorPalet.push(`rgb(${getRed},${getGreen},${getBlue})`);
        this.colorPaletLight.push(`rgb(${getRed},${getGreen},${getBlue})`);
      // }
      console.log('deneme')
    }
    for (let d = 0; d < 12; d++) {
    this.rdark = this.rdark - value;
    this.gdark = this.gdark - value;
    this.bdark = this.bdark - value;

    // edited
    // if (d !== 0 && d % 2 === 0) {
      const getRed = this.rdark < 0 ? 0 : this.rdark;
      const getGreen = this.gdark < 0 ? 0 : this.gdark;
      const getBlue = this.bdark < 0 ? 0 : this.bdark;
      this.colorPalet.push(`rgb(${getRed},${getGreen},${getBlue})`);
      this.colorPaletDark.push(`rgb(${getRed},${getGreen},${getBlue})`);
      // }
    }
  };

  // rgb to hex
  // componentToHex = (c) => {
  //   var hex = c.toString(16);
  //   return hex.length === 1 ? "0" + hex : hex;
  // };

  // rgbToHex = (r, g, b) => {
  //   return (
  //     "#" +
  //     this.componentToHex(r) +
  //     this.componentToHex(g) +
  //     this.componentToHex(b)
  //   );
  // };

  r;

  g;

  b;

  a;

  rdark;

  gdark;

  bdark;

  render() {
    const { color } = this.state;
    return (
      <React.Fragment>
        <div className="color-contaniner">
          <div className="color-selector">
            <SketchPicker
              width="250px"
              onChangeComplete={this.handleChange}
              onChange={this.handleChange}
              color={color}
            />
          </div>
          <div className="created-color-picker">
            <div className="title" style={{ backgroundColor: color.hex }}>
              Selected Color : <strong> {color.hex}</strong>
            </div>
            <div className="pallette palletteLight">
              {this.colorPaletLight &&
                this.colorPaletLight.length > 0 &&
                this.colorPaletLight
                  .slice(0)
                  .reverse()
                  .map((item) => {
                    return (
                      <div
                        className="colorItem"
                        style={{
                          backgroundColor: item,
                          color: "#fff",
                        }}
                      >
                        {item}
                      </div>
                    );
                  })}
            </div>
            <div className="pallette palletteDark">
              {this.colorPaletDark &&
                this.colorPaletDark.length > 0 &&
                this.colorPaletDark.map((item) => {
                  return (
                    <div
                      className="colorItem"
                      style={{ backgroundColor: item, color: "#fff" }}
                    >
                      {item}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ColorPickerGenerator;
