<template>
  <div class="home">
    <h2 class="titelHome">Lista de razas de perros disponibles</h2>
    <div class="content">
      <DogsListItem v-for="(element, index) in $store.state.dogsList" :key="index" :name="element" />
    </div>
    
  </div>
</template>

<script>
import DogsListItem from "@/components/DogsListItem.vue";
export default {
  name: "Home",
  components: {
    DogsListItem
  },
  data() {
    return {
      dogsList: []
    };
  },
  created() {
    this.$store.dispatch("getDogs");
  }
};
</script>

<style  scoped>
.home {
  text-align: center;
  color: rgb(33, 85, 116);
}
.titelHome{
  color: rgb(16, 16, 68);
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
}
.content{
  background: rgb(239, 243, 239);
  display: flex;
  flex-wrap: wrap;
  padding-left: 77px;
  border-radius: 2px;

} 
</style>