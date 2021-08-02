const Model = require("./model");

const TagModel = new Model("tag");

/**
 * {
 *    name: String,
 *    desc: String
 * }
 */
module.exports = {
  getAll() {
    return TagModel.find();
  },
  getById(id) {
    return TagModel.findOne(id);
  },
  create(data) {
    if (data && data["name"]) {
      return TagModel.create(data);
    }
    return null;
  },
  update(id, data) {
    return TagModel.update(id, data);
  },
  delete(id) {
    return TagModel.delete(id);
  },
};