<script>
export default {
  props: ['rating']
}
</script>

<template>
  <span class="rating-row">
      <span class="rating-element" v-for="n in rating"></span>
  </span>
</template>