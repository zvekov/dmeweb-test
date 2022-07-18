<script setup>
import EquipmentListActions from './EquipmentListActions.vue'
import InputSearch from '@/components/ui/InputSearch.vue'

defineProps({
  title: {
    type: String,
    default: "",
  }
})
</script>
<template>
  <div :class="$style.EquipmentListHeader">
    <div :class="$style.EquipmentListHeader__top">
      <span :class="$style.EquipmentListHeader__top__title">{{title}}</span>
      <EquipmentListActions />
    </div>
    <InputSearch
        placeholder="Search category or HCPCS name "
        :class="$style.EquipmentListHeader__bottom"
    />
  </div>
</template>

<style lang="scss" module>
.EquipmentListHeader {

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #E1E1E1;

    &__title {
      color: #2D5A81;
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
    }
  }

  &__bottom {
    padding: 1rem 1rem 0 1rem;
  }
}
</style>
