import { defineStore } from "pinia";


// this is just a TEST
export const userTest = defineStore({
  id: "usertest",

  //state is a reactive state that can be shared across the application
  //and will be modified accordingly when updated globally
  state: () => ({
    value: 17787878475947,
  }),
  //getters are used to get certain state value 
  //(that can also be combined with something else like a text or computed value)
  getters: {
    valueWithName: (state) => `Value is ${state.value}`,
  },
  //actions are used to modify the initial value of state
  actions: {
    setNewValue(newValue: number) {
      this.value = newValue;
    },
  },
});
