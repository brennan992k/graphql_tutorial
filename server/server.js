const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const port = 4000;

/*==== Database ====*/
const articles = [
  {
    id: 0,
    title: "Graphql, what's it?",
    desc: "How to learn graphql and use it with express?",
    content:
      "By using the type system, it can be predetermined whether a GraphQL query is valid or not. This allows servers and clients to effectively inform developers when an invalid query has been created, without having to rely on runtime checks",
  },
];

/*==== Schema ====*/
const schema = buildSchema(`
  type Query {
    articles: [article]
    article(id: Int!):article
  }

  type Mutation {
    updateArticle(id: Int!): mutationResponse!
    deleteArticle(id: Int!): mutationResponse!
    createArticle(data: articleContructor!): mutationResponse!
  }

  enum status {
    success
    failure
  }

  type article {
    id: Int!
    title: String
    desc: String
    content: String
  }

  type mutationResponse {
    status: status!
    data: article
  }

  input articleContructor {
    title: String!
    desc: String!
    content: String!
  }

`);

/*==== Resolve // Root ====*/
const root = {
  /*---- resolve (root, context, )  */
  articles: (_, { articles }) => articles,
  article: ({ id }, { articles }) =>
    articles.find((article) => article.id == id),
  updateArticle: ({ id, data }, { articles }) => {
    const indexItem = articles.findIndex((article) => article.id == id);
    if (!indexItem)
      return {
        status: "failure",
        data: null,
      };
    articles[indexItem] = { ...articles[indexItem], ...data };
    return {
      status: "success",
      data: articles[indexItem],
    };
  },
  deleteArticle: ({ id }, { articles }) => {
    const indexItem = articles.findIndex((article) => article.id == id);
    const data = articles[indexItem];
    articles.slice(indexItem, indexItem + 1);
    return {
      status: "success",
      data,
    };
  },
  createArticle: ({ data }, { articles }) => {
    const newData = {
      ...data,
      id: articles[articles.length - 1]["id"] + 1,
    };
    articles.push(newData);
    return {
      status: "success",
      data: newData,
    };
  },
};

/*==== Router ====*/
app.use(
  "/",
  graphqlHTTP((req, res, { query, variables, operationName, raw }) => {
    return {
      schema: schema,
      rootValue: root,
      graphiql: true,
      context: {
        req,
        res,
        articles,
      },
      extensions: ({ document, variables, operationName, result, cont }) => ({
        document,
        variables,
        operationName,
        result,
        cont,
      }),
    };
  })
);

app.listen(port, () => console.log(`Example app listening on port port!`));
