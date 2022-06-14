const toDo = [
  {
    text: "task",
    done: false,
  },
  {
    text: "task 2",
    done: false,
  },
  {
    text: "task 3",
    done: false,
  },
];

new Vue({
  el: "#app",

  data: {
    toDoList: toDo,
    newToDoText: "",
  },

  methods: {
    delItem(index) {
      this.toDoList.splice(index, 1);
    },
    addItem(text) {
      if (text === "") {
        return;
      } else {
        this.toDoList.push({
          text: text.trim(),
          done: false,
        });
      }
    },
  },
});
