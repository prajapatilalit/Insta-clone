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
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default Home;
