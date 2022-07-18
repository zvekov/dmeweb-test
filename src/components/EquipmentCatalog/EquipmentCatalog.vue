<script setup>
import EquipmentCatalogHeader from './EquipmentCatalogHeader.vue'
import Button from '@/components/ui/Button.vue'
import EditIcon from "@/assets/icons/edit.svg?raw"

</script>

<template>
<div :class="$style.EquipmentCatalog">
  <EquipmentCatalogHeader title="Equipment Catalog" :class="$style.EquipmentCatalog__header">
    <template #actions>
      <Button title="Last Modify" bg="primary" :icon="EditIcon"/>
    </template>
  </EquipmentCatalogHeader>
  <div :class="$style.EquipmentCatalog__aside">
    <slot name="aside" />
  </div>
  <div :class="$style.EquipmentCatalog__main">
    <slot name="main" />
  </div>
</div>
</template>

<style lang="scss" module>
.EquipmentCatalog {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  align-content: flex-start;

  &__header {
    width: 100%;
    height: fit-content;
  }

  &__aside {
    width: auto;
    display: flex;
    flex-direction: row;

    & > div {
      width: 260px;
    }
  }
  &__main {
    flex: 1;
  }
}
</style>
