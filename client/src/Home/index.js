import React from "react";
import { getAllArticle, useRequest } from "../API";
import Grid from "../component/Grid";
import ArticlePost, { AddingArticlePost } from "./ArticlePost";
import "./index.css";

const Page = () => {
  const [{ data }] = useRequest(getAllArticle);

  return (
    <Grid className={"container"}>
      <Grid container lg={9} xl={9} className={"main"}>
        <AddingArticlePost />
        {data?.map((article) => (
          <ArticlePost key={`${article.id}`} {...article} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Page;
