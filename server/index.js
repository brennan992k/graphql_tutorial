const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const controllers = require("./controllers");
const schema = require("./schema");
const resolve = require("./resolve");
const app = express();
const port = 4000;

app.use(
  "/",
  graphqlHTTP((req, res, { query, variables, operationName, raw }) => {
    return {
      schema: schema,
      rootValue: resolve,
      graphiql: true,
      context: {
        req,
        res,
        controllers,
      },
      extensions: ({ document, variables, operationName, result, cont }) => ({
        // document,
        // variables,
        // operationName,
        // result,
        // cont,
      }),
    };
  })
);

app.listen(port, () => console.log(`Example app listening on port port!`));
