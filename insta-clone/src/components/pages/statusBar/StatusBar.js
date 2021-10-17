import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
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
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
      },
      {
        username: "avataar_angle",
        imageUrl: "https://www.w3schools.com/howto/img_avatar2.png",
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
          {this.state.statusList.map((item, index) => {
            return (
              <div className="status" key={index}>
                <Avatar className="statusbar_avatar" src={item.imageUrl} />
                <div className="statusbar_text">{item.username}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default StatusBar;
