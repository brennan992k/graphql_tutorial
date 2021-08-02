const Storage = {};

class Model {
  constructor(name) {
    this.name = name;
    Storage[name] = [];
  }

  find = () => {
    const items = Storage[this.name];
    return items;
  };

  findOne = (id) => {
    const item = Storage[this.name].find((item) => item.id == id);
    return item;
  };

  create = (data) => {
    const indexMaximum =
      Storage[this.name][Storage[this.name].length - 1]?.["id"];
    const newItem = {
      ...data,
      id:
        typeof indexMaximum != "number" || indexMaximum < 0
          ? 0
          : indexMaximum + 1,
    };
    Storage[this.name].push(newItem);
    return newItem;
  };

  update = (id, data) => {
    const itemIndex = Storage[this.name].findIndex((item) => item.id == id);
    const newItem = { ...Storage[this.name][itemIndex], ...data, id: id };
    Storage[this.name][itemIndex] = newItem;
    return newItem;
  };

  delete = (id) => {
    const itemIndex = Storage[this.name].findIndex((item) => item.id == id);
    const item = Storage[this.name][itemIndex];
    Storage[this.name].slice(itemIndex, itemIndex + 1);
    return item;
  };
}

module.exports = Model;
