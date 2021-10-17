import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import profilImage from "../../images/pp1.png";
import statusaddImage from "../../images/statusadd.png";
import "./statusBar.css";

class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusList: [],
    };
  }

  getStatusList = () => {
    let data = [
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
      {
        username: "avataar_angle",
        imageUrl: profilImage,
      },
    ];
    this.setState({ statusList: data });
  };

  componentDidMount() {
    this.getStatusList();
  }
  render() {
    return (
      <div>
        <div className="statusbar_container">
          <img className="add_status" src={statusaddImage} alt="addpic" />

          {this.state.statusList.map((item, index) => (
            <div className="status" key={index}>
              <Avatar className="statusbar_avatar" src={item.imageUrl} />
              <div className="statusbar_text">{item.username}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StatusBar;
