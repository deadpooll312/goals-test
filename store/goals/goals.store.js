import { GoalsAction } from "./goals.action";
import { decorate, observable } from "mobx";

class GoalsStore extends GoalsAction {
  list = [
    {
      title: "For smoothie",
      colors: 0,
      until: new Date("02.22.20"),
      goal: 10500,
      done: 10,
      id: 1,
    },
    {
      title: "For smoothie 2",
      colors: 1,
      until: new Date("02.22.20"),
      goal: 11720,
      done: 30,
      id: 2,
    },
    {
      title: "For smoothie 3",
      colors: 2,
      until: new Date("02.22.20"),
      goal: 15680,
      done: 50,
      id: 3,
    },
  ]
}

GoalsStore = decorate(GoalsStore, {
  goals: observable
});

export default new GoalsStore();
