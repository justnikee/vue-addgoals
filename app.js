Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    removeGoals() {
      this.goals.pop(this.enteredValue);
    },
  },
}).mount("#app");

// ~~~~~~~~~~~~~~~~ vue vs venela js ~~~~~~~~~~~~~~~~ //

// const input = document.querySelector("#goal");
// const button = document.querySelector("button");
// const addTo = document.querySelector("ul");

// const handleAdd = () => {
//   const data = input.value;
//   console.log(data);
//   const newEl = document.createElement("li");
//   newEl.textContent = data;
//   addTo.appendChild(newEl);
//   input.value = "";
// };

// button.addEventListener("click", handleAdd);
