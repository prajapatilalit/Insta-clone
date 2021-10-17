import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import StatusBar from "../statusBar/StatusBar";
import Posts from "../posts/Posts";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postLists: [],
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let data = [
      {
        postId: 1,
        username: "aditya",
        postPicUrl:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        timeStamp: "9:30, 21/05/2021",
        likes: 456,
      },
      {
        postId: 2,
        username: "lalit",
        postPicUrl:
          "https://img.freepik.com/free-photo/aesthetic-background-flower-vase_53876-104809.jpg?size=626&ext=jpg",
        timeStamp: "9:30, 21/05/2021",
        likes: 1456,
      },
      {
        postId: 3,
        username: "John michal",
        postPicUrl:
          "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        timeStamp: "9:30, 21/05/2021",
        likes: 56,
      },
      {
        postId: 4,
        username: "Neelam",
        postPicUrl:
          "https://img.freepik.com/free-photo/aesthetic-background-flower-vase_53876-104809.jpg?size=626&ext=jpg",
        timeStamp: "9:30, 21/05/2021",
        likes: 1006,
      },
    ];
    this.setState({ postLists: data });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={5}>
            <StatusBar />
            {this.state.postLists.map((item) => (
              <Posts
                key={item.postId}
                postId={item.postId}
                username={item.username}
                postPicUrl={item.postPicUrl}
                timeStamp={item.timeStamp}
                likes={item.likes}
              />
            ))}
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
