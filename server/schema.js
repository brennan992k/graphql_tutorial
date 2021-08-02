const { buildSchema } = require("graphql");

const status = `
   enum Status {
      success
      failure
   }
`;

const tag = `
   type Tag {
       id: Int!
       name: String!
       desc: String
   }

   type TagResponse {
       status: Status
       data: Tag
   }

   input TagCreate {
       name: String!
       desc: String
   }
    
   input TagUpdate {
    name: String
    desc: String
}
`;

const category = `
   type Category {
    id: Int!
    name: String!
    desc: String
   }

   type CategoryResponse {
    status: Status
    data: Category
   }

   input CategoryCreate {
    name: String!
    desc: String
   }

   input CategoryUpdate {
    name: String
    desc: String
   }
`;

const article = `
   type Article {
    id: Int!
    title: String!
    desc: String
    content: String!
    categories: [Category]
    tags: [Tag]
   }

   type ArticleResponse {
    status: Status
    data: Article
   }

   input ArticleCreate {
    title: String!
    desc: String
    content: String!
    categories: [Int]
    tags: [Int]
   }

   input ArticleUpdate {
    title: String
    desc: String
    content: String
    categories: [Int]
    tags: [Int]
   }
`;

const query = `
    type Query {
        articleList: [Article]
        article(id: Int!): Article
        tagList: [Tag]
        tag(id: Int!): Tag
        categoryList: [Category]
        category(id: Int!): Category
    }
`;
const mutation = `
    type Mutation {
        updateArticle(id: Int!, data: ArticleUpdate!): ArticleResponse!
        createArticle(data: ArticleCreate!): ArticleResponse!
        deleteArticle(id: Int!): ArticleResponse!
        updateTag(id: Int!, data: TagUpdate!): TagResponse!
        createTag(data: TagCreate!): TagResponse!
        deleteTag(id: Int!): TagResponse!
        updateCategory(id: Int!, data: CategoryUpdate!): CategoryResponse!
        createCategory(data: CategoryCreate!): CategoryResponse!
        deleteCategory(id: Int!): CategoryResponse!
    }
`;

/*==== Schema ====*/
const schema = buildSchema(`
${status}
${tag}
${category}
${article}
${query}
${mutation}
`);

module.exports = schema;
