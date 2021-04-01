import { makeObservable, observable, action } from 'mobx';

class CategoryStore {
  categories = [];

  constructor() {
    makeObservable(this, {
      categories: observable,
      addCategory: action,
      removeCategory: action,
    });
  }

  addCategory = (item) => {
    this.categories = [...this.categories, item];
  };

  removeCategory = (item) => {
    this.categories = this.categories.filter((each) => {
      each.index !== item.id;
    });
  };
}

const categoryStore = new CategoryStore();
export default categoryStore;
