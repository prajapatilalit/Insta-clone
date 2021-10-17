import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./infoSection.css";
import profilImage from "../../images/pp1.png";

class InfoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="info_container">
          <Avatar className="info_image" src={profilImage} />
          <div className="info_content">
            <div className="info_username">username</div>
            <div className="info_description">description</div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSection;
