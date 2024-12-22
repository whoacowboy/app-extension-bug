<template>
  <q-btn
    class="component"
    :data-item="item"
    :label="item"
    @click="action"
  ></q-btn>
</template>
<script setup>
import { ref } from 'vue'

const item = ref('hello')
const action = () => (item.value = Math.random().toString(36).substring(2, 12))
</script>
<style lang="scss">
.component {
}
</style>
