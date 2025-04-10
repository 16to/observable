<script lang="ts" setup>
import { computed } from 'vue'

const params = computed(() => {
  const uri = 'https://arms-unify-demo-arms-unify-demo-awqlqbyvcc.cn-hangzhou.fcapp.run';
  return {
    uri,
  }
})

</script>

<template>
  <iframe :src="params.uri" class="frame"> </iframe>
</template>

<style scoped>
.frame {
  height: calc(100vh - (var(--navbar-height)));
  width: 100vw;
  border: none;
  outline: none;
  max-width: var(--sls-page-max-width);
  margin: auto;
}

</style>