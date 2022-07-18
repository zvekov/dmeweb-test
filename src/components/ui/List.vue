<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
  default: []
})
</script>
<template>
  <div>
    <Card v-for="(item, index) in items"
          :key="item.id"
          :item="item"
    />
  </div>
</template>
