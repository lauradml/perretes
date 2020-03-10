<template>
  <div class="home">
    <!-- <ul>
      <li v-for="(element, index) in $store.state.dogsList" :key="index">
        <p>{{element}}</p>
      </li>
    </ul> -->

    <DogsListItem
    v-for="(element, index) in $store.state.dogsList" 
    :key="index"
    :name="element"
    />

  </div>
</template>

<script>
import DogsListItem from '@/components/DogsListItem.vue';
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
