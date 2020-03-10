<template>
  <div class="breed">

      <input type="text" v-model="breed"/>
      <button @click='http()'> Hacer petición</button>
    <ul class="content">
      <li class="item" v-for="(element, index) in $store.state.breedList" :key="index">
        <img  class="img" :src="element" />
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
      breed:""
    };
  },
  created() {
    this.breed = this.$route.params.breed
    this.$store.dispatch("getBreed",this.breed);
    console.log(this.$route.params.breed);
    
  },

  methods:{
    http(){
      this.$store.dispatch("getBreed",this.breed);
    }
  }
};
</script>

<style scoped>
.content{
  display: flex;
  flex-wrap: wrap;
}
 .item{
    height: 250px;
    width: 300px;
    overflow:hidden;
 }
 .img{
    height: 250px;
    width: 300px;
    overflow:hidden;
    object-fit: cover;
 }
</style>