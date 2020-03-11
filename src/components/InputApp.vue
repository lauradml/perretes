<template>
  <div>
    <el-input
      v-model="inputValue"
      :placeholder="imputPlaceholder"
      @input="sendInputValue"
      @keyup.enter.native="onSubmit" 
    ></el-input>
  </div>
</template>

<script>
export default {
    name:"InputApp",
  data() {
    return {
      inputValue: this.textValue
    };
  },
  props: {
    textValue: String,
    sizeInput: String,
    imputPlaceholder: String
  },
  methods: {
    sendInputValue() {
      this.$emit("saveInputValue", this.inputValue);
    },
    onSubmit(){
      this.$emit("enter");
    }
  }
};
</script>