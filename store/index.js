import GoalsStore from "./goals/goals.store";

class RootStore {
  constructor() {
    this.goals = GoalsStore;
  }
}

export default new RootStore();
