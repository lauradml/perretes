<template>
  <div class="breed">
    <div class="shearch">
      <InputApp
        :inputText="breed"
        :imputPlaceholder="serverText"
        size="medium"
        @saveInputValue="onInputValueChange"
        @enter="http"

      ></InputApp>
      <ButtonApp @submit="http" :icon="'el-icon-search'" :name="textButton"></ButtonApp>
    </div>
    <ul class="content">
      <li class="item" v-for="(element, index) in $store.state.breedList" :key="index">
        <img class="img" :src="element" />
      </li>
    </ul>
    
  </div>
</template>

<script>
import InputApp from "@/components/InputApp.vue";
import ButtonApp from "@/components/ButtonApp.vue";
export default {
  name: "Breed",
  components: {
    InputApp,
    ButtonApp
  },
  data() {
    return {
      breed: "",
      serverText: "Buscar raza",
      textButton: "Buscar"
    };
  },
  created() {
    this.breed = this.$route.params.breed;
    this.$store.dispatch("getBreed", this.breed);
    console.log(this.$route.params.breed);
  },

  methods: {
    onInputValueChange(e) {
      this.breed = e;

    },
    http() {
      this.$store.dispatch("getBreed", this.breed);
    }
  }
};
</script>

<style scoped>
.shearch{
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.content {
  display: flex;
  flex-wrap: wrap;
}
.item {
  height: 250px;
  width: 300px;
  overflow: hidden;
}
.img {
  height: 250px;
  width: 300px;
  overflow: hidden;
  object-fit: cover;
  margin-left: 10px;
}
</style>