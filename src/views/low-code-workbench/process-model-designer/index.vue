<template>
  <div class="bpmn-process-container">
    <Designer />
  </div>
</template>

<script lang="ts" setup>
import Designer from './components/process-model-canvas.vue';
</script>

<style scoped>
body,
html,
.bpmn-process-container {
  height: 100%;
  width: 100%;
}
</style>
