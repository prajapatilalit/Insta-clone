import { Avatar } from "@material-ui/core";
import React, { Component } from "react";
import "./post.css";
import pp1 from "../../images/pp1.png";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";
import uploadImage from "../../images/upload1.png";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    let data = [
      {
        username: "Manav singh",
        commentId: 1,
        timeStamp: "9:30, 21/05/2021",
        description: "good post",
      },
      {
        username: "Payal rathaor",
        commentId: 2,
        timeStamp: "9:30, 21/05/2021",
        description: "good post",
      },
      {
        username: "John mark",
        commentId: 3,
        timeStamp: "9:30, 21/05/2021",
        description: "good post",
      },
    ];
    this.setState({ commentList: data });
  };
  render() {
    return (
      <div>
        <div className="upload_section">
          <img className="post_uploadimage" src={uploadImage} alt="upload" />
          <div className="upload">Upload</div>
        </div>
        <div className="posts_container">
          <div className="posts_header">
            <Avatar className="posts_image" src={pp1} />
            <div className="posts_username">{this.props.username}</div>
          </div>
          <div>
            <img src={this.props.postPicUrl} width="615px" alt="post" />
          </div>
          <div className="posts_analytics">
            <div>
              <img class="posts_icon " src={love} alt="love" />
              <img class="posts_icon " src={comment} alt="comment" />
              <img class="posts_icon " src={share} alt="share" />
            </div>
            <div style={{ fontWeight: "bold", marginLeft: "10px" }}>
              {this.props.likes} likes
            </div>
          </div>
          <div>
            {this.state.commentList.map((item, index) => (
              <div className="posts_comment" key={index}>
                {item.username} : Comment id: {item.commentId}{" "}
              </div>
            ))}

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
