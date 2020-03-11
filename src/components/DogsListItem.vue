<template>
    <router-link
      :to="'/breed/' + name"
      tag="div"
      class="list-item">
      <p class="item">🐾  {{name}}</p> 
    </router-link>
</template>

<script>
export default {
  name: 'DogsListItem',
  props: {
    name: String,
  },
};
</script>
<style  scoped>

.item{
  font-family: Arial, sans-serif;
  margin-left: 10px;
  width: 175px;
  text-align: left;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
}
</style>