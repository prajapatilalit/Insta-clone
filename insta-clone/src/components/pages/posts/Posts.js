import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./post.css";
import love from "../../images/love.svg";
import message from "../../images/message.svg";
import share from "../../images/share.svg";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="posts_container">
          {/* header */}
          <div className="posts_header">
            <Avatar className="posts_image" src={this.props.profilimage} />
            <div className="posts_username">{this.props.username}</div>
          </div>
          {/* image */}
          <div>
            <img src={this.props.postPic} width="615px" alt="post" />
          </div>
          {/* analytics */}
          <div className="posts_analytics">
            <div>
              <img class="posts_icon " src={love} />
              <img class="posts_icon " src={message} />
              <img class="posts_icon " src={share} />
            </div>
            <div style={{ fontWeight: "bold", marginLeft: "10px" }}>
              {this.props.likes} likes
            </div>
          </div>
          {/* comments */}
          <div>
            <div className="posts_comment">Hello comments</div>
            <div className="posts_comment">Hello comments</div>
            <div className="posts_comment">Hello comments</div>
            <div className="posts_comment">Hello comments</div>
            <div className="posts_comment">Hello comments</div>
            <input
              className="posts_commentInput"
              type="text"
              placeholder="add comments here...."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
