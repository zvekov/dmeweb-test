<script setup>
import Alert from '@/components/ui/Alert.vue'
import {storeToRefs} from "pinia";
import {useCategoryStore} from "@/stores/categories";
const {alert} = storeToRefs(useCategoryStore())
</script>
<template>
  <div :class="$style.page">
      <div :class="$style.page__content">
        <slot />
      </div>
    <Teleport to="body">
      <Alert v-if="alert.text" :alert="alert"/>
    </Teleport>
  </div>
</template>

<style lang="scss" module>
.page {
  &__content {}
}
</style>
