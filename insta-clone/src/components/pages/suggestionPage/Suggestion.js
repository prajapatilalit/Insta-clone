import React, { Component } from "react";
import "./suggestion.css";
import profilImage from "../../images/pp1.png";
import { Avatar } from "@material-ui/core";

class Suggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestionList: [],
    };
  }

  componentDidMount() {
    this.getSuggestion();
  }
  getSuggestion = () => {
    let data = [
      {
        profilImageUrl: profilImage,
        suggestUsername: "Anmol Rathi",
      },
      {
        profilImageUrl: profilImage,
        suggestUsername: "Moni Roy",
      },
      {
        profilImageUrl: profilImage,
        suggestUsername: "Shivam Mavi",
      },
      {
        profilImageUrl: profilImage,
        suggestUsername: "Maiayika Arora",
      },
      {
        profilImageUrl: profilImage,
        suggestUsername: "Sergam Patel",
      },
    ];
    this.setState({ suggestionList: data });
  };

  render() {
    return (
      <div>
        <div className="suggestion_container">
          <div className="header">
            <div>Suggestion for You</div>
          </div>
          <div className="suggestion_body">
            {this.state.suggestionList.map((item, index) => (
              <div className="suggestion_friend" key={index}>
                <Avatar
                  className="suggestion_image"
                  src={item.profilImageUrl}
                />
                <div className="suggestion_list">{item.suggestUsername}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestion;
