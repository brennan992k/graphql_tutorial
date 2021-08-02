const Model = require("./model");

const ArticleModel = new Model("article");

/**
 * {
 *    titile: String,
 *    desc: String,
 *    content: String,
 *    tags: [Int] -- tag id list
 *    categories: [Int] -- category id list
 * }
 */
module.exports = {
  getAll() {
    return ArticleModel.find();
  },
  getById(id) {
    return ArticleModel.findOne(id);
  },
  create(data) {
    if (data && data["title"] && data["content"]) {
      return ArticleModel.create(data);
    }
    return null;
  },
  update(id, data) {
    return ArticleModel.update(id, data);
  },
  delete(id) {
    return ArticleModel.delete(id);
  },
};
