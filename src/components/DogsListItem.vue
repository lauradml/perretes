<template>
    <router-link
      :to="'/breed/' + name"
      tag="div"
      class="list-item">
        {{name}}
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