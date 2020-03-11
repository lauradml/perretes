<template>
  <el-button :icon="this.iconImage" type="primary" plain @click="submit">{{name}}</el-button>
</template>

<script>
export default {
  name: "ButtonApp",
  data() {
    return {
      iconImage: this.icon
    };
  },
  methods: {
    submit(value) {
      this.$emit("submit", value);
    }
  },
  props: {
    icon: String,
    name: String
  }
};
</script>

