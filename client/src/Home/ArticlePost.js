import Grid from "../component/Grid";
import Link from "../component/Link";
import "./ArticlePost.css";

export const AddingArticlePost = () => {
  return (
    <Grid item xl={6}>
      <Link to={`/article/add`}>
        <div className={"article_post_main article_post_main_adding"}>
          <h1>CREATE NEW</h1>
        </div>
      </Link>
    </Grid>
  );
};

const ArticlePost = ({ id, title, desc }) => {
  return (
    <Grid item xl={6}>
      <Link to={`/article/${id}`}>
        <div className={"article_post_main"}>
          <div className={"article_post_main__left"}></div>
          <div className={"article_post_main__right"}>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default ArticlePost;
