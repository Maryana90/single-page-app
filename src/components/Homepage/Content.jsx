import * as React from "react";
import CardBlock from "./CardBlock";
import Grid from "@mui/material/Grid";
import articleList from "./articles";

const Content = () => {
  const getArticles = (articlesObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <CardBlock {...articlesObj} />
      </Grid>
    );
  };
  return (
    <Grid container spacing={4}>
      {articleList.map((articlesObj) => getArticles(articlesObj))}
    </Grid>
  );
};

export default Content;
