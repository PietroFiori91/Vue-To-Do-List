"use strict";

const { createApp } = Vue;

// array oggetti da inserire in ul>li

const app = createApp({
  data() {
    return {
      justDoIt: [
        {
          text: "Daily Quest",
          color: "#ffff",
        },
      ],
    };
  },
  methods: {},
}).mount("#app");
