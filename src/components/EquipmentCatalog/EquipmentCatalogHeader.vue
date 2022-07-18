<script setup>
defineProps({
  title: String,
  default: ''
})
</script>

<template>
<div :class="$style.EquipmentCatalogHeader">
  <p :class="$style.EquipmentCatalogHeader__title">{{title}}</p>
  <slot name="actions" />
</div>
</template>

<style lang="scss" module>
.EquipmentCatalogHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E1E1E1;
  padding: 1rem;

  &__title {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.5rem;
  }
}
</style>
