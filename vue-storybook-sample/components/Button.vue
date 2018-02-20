<template>
  <button @click="handleClick">{{ children }}</button>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["handleClick", "children"],
});
</script>
