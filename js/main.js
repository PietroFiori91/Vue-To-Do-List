"use strict";

const { createApp } = Vue;

// array oggetti da inserire in ul>li

const app = createApp({
  data() {
    return {
      newJustDoItItem: {
        text: "",
        color: "#262B41",
      },
      justDoItList: [
        {
          text: "Daily Quest",
          color: "#ffff",
        },
      ],
    };
  },
  //aggiungo al click btn push della quest in array
  methods: {
    addJustDoItItem() {
      //clono per togliere reattività oggetto
      const itemClone = { ...this.newJustDoItItem };
      this.justDoItList.push(itemClone);
    },
  },
}).mount("#app");
