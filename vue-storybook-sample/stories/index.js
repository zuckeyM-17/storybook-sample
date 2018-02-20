import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import { action } from '@storybook/addon-actions';
import MyButton from "../components/Button.vue";

storiesOf("Button", module)
  .add("with text", () => ({
    components: { MyButton },
    data() {
      return {
        handleClick: action("clicked"),
        children: "hello button" 
      };
    },
    template: '<my-button :handleClick="handleClick" :children="children"></my-button>'
  }))
  .add("with some emoji", () => ({
    components: { MyButton },
    data() {
      return {
        handleClick: action("clicked"),
        children: "😀 😎 👍 💯" 
      };
    },
    template: '<my-button :handleClick="handleClick" :children="children"></my-button>'
  }));

