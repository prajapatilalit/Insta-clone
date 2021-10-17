import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./post.css";

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
              <i class=" posts_icon far fa-heart"></i>
              <i class=" posts_icon far fa-comments"></i>
              <i class=" posts_icon fas fa-share"></i>
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
