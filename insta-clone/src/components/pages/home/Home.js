import React from "react";
import Grid from "@material-ui/core/Grid";
import StatusBar from "../statusBar/StatusBar";
import Posts from "../posts/Posts";

const Home = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}>
          <StatusBar />
          <Posts
            id="1"
            username="aditya"
            postPic="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            likes="456"
          />
          <Posts
            id="2"
            username="aditya"
            postPic="https://img.freepik.com/free-photo/aesthetic-background-flower-vase_53876-104809.jpg?size=626&ext=jpg"
            likes="1236"
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Home;
