const Model = require("./model");

const CategoryModel = new Model("category");

/**
 * {
 *    name: String,
 *    desc: String
 * }
 */
module.exports = {
  getAll() {
    return CategoryModel.find();
  },
  getById(id) {
    return CategoryModel.findOne(id);
  },
  create(data) {
    if (data && data["name"]) {
      return CategoryModel.create(data);
    }
    return null;
  },
  update(id, data) {
    return CategoryModel.update(id, data);
  },
  delete(id) {
    return CategoryModel.delete(id);
  },
};