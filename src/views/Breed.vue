<template>
  <div class="breed">
    <ul>
      <li class="item" v-for="(element, index) in $store.state.breedList" :key="index">
        <img :src="element" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breed",
  components: {},
  data() {
    return {
      breed:"boxer"
    };
  },
  created() {
    this.breed = this.$route.params.breed 
    // this.$store.dispatch("getBreed",this.breed);
    this.$store.dispatch("getBreed");
    console.log(this.$route.params.breed);
    
  }
};
</script>