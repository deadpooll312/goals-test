export class GoalsAction {
  createGoal(item) {
    this.list.push(item);
  }
  
  updateGoal(updated) {
    this.list = this.list.map(item => {
      if (item.id === updated.id) {
        return updated;
      }
      return item;
    });
  }

  updateIndex(index) {
    this.index = index;
  }

  getActiveItem() {
    return this.list[this.index];
  }

}