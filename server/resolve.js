const tag = {
  tagList: (_, { controllers: { tag } }) => tag.getAll(),
  tag: ({ id }, { controllers: { tag } }) => tag.getById(id),
  updateTag: ({ id, data }, { controllers: { tag } }) => {
    const result = tag.update(id, data);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
  createTag: ({ data }, { controllers: { tag } }) => {
    const result = tag.create(data);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
  deleteTag: ({ id }, { controllers: { tag } }) => {
    const result = tag.delete(id);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
};

const category = {
  categoryList: (_, { controllers: { category } }) => category.getAll(),
  category: ({ id }, { controllers: { category } }) => category.getById(id),
  updateCategory: ({ id, data }, { controllers: { category } }) => {
    const result = category.update(id, data);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
  createCategory: ({ data }, { controllers: { category } }) => {
    const result = category.create(data);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
  deleteCategory: ({ id }, { controllers: { category } }) => {
    const result = category.delete(id);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
};

const article = {
  articleList: (_, { controllers: { article } }) => article.getAll(),
  article: ({ id }, { controllers: { article } }) => article.getById(id),
  updateArticle: ({ id, data }, { controllers: { article } }) => {
    const result = article.update(id, data);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
  createArticle: ({ data }, { controllers: { article, tag, category } }) => {
    const result = article.create(data);
    if (result) {
      return {
        status: "success",
        data: {
          ...result,
          tags: tag.getAll().filter((tag) => result.tags.includes(tag.id)),
          categories: category
            .getAll()
            .filter((category) => result.categories.includes(category.id)),
        },
      };
    }
    return {
      status: "failure",
      data: result,
    };
  },
  deleteArticle: ({ id }, { controllers: { article } }) => {
    const result = article.delete(id);
    return {
      status: result ? "success" : "failure",
      data: result,
    };
  },
};

const root = {
  ...tag,
  ...category,
  ...article,
};

module.exports = root;
