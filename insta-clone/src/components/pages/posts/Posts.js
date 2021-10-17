import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./post.css";
import pp1 from "../../images/pp1.png";
import postPic from "../../images/post.jpg";
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
            <Avatar className="posts_image" src={pp1} />
            <div className="posts_username">username</div>
          </div>
          {/* image */}
          <div>
            <img src={postPic} width="615px" alt="post" />
          </div>
          {/* analytics */}
          <div></div>
          {/* comments */}
          <div></div>
        </div>
      </div>
    );
  }
}

export default Posts;
