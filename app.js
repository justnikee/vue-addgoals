Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
      link: 'https://www.google.com/',
      htmlCode: '<h2>htis is some text </h2>'
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
    outputGoals() {
      const randomNumber = Math.random()
      if (randomNumber > 0.5) {
        return 'l vue'
      } else {
        return 'master vue'
      }
    }
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
