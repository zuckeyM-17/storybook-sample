import { configure } from "@storybook/vue";

import Vue from "vue";

function loadStories() {
  require("../stories/index.js");
}

configure(loadStories, module);
