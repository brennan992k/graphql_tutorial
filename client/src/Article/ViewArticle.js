import React from "react";
import { useParams } from "react-router-dom";
import { getArticle, useRequest } from "../API";
import Grid from "../component/Grid";
import "./ViewArticle.css";

const Page = () => {
  const params = useParams();
  const [{ data }] = useRequest(() => getArticle(params.id));

  return (
    <Grid className={"view_article_root"}>
      <Grid xl={6} className={"view_article_main"}>
        {/*==== Header ====*/}
        <div className={"view_article_header"}>
          <h1>{data?.title}</h1>
          <h3>{data?.desc}</h3>
        </div>

        {/*==== Content ====*/}
        <div
          className={"view_article_content"}
          dangerouslySetInnerHTML={{ __html: data?.content }}
        />
      </Grid>
    </Grid>
  );
};

export default Page;
