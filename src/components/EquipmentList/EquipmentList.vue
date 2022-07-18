<script setup>
import EquipmentListHeader from './EquipmentListHeader.vue'
import List from '@/components/ui/List.vue'

defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  error: {
    type: String,
    default: ''
  },
  products: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <div :class="$style.EquipmentList">
    <EquipmentListHeader title="Equipment List"/>
    <div :class="$style.EquipmentList__content">
      <div v-if="loading">Loading products...</div>
      <div v-if="error">{{ error.message }}</div>
      <div v-if="!loading && !products.length">No products.</div>
      <List :class="$style.EquipmentList__content__products" v-if="products" :items="products"/>
    </div>
  </div>
</template>

<style lang="scss" module>
.EquipmentList {
  &__content {
    padding: 1rem;

    &__products {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
