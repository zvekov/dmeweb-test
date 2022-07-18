<script setup>
import InputText from '@/components/ui/InputText.vue'
import Button from '@/components/ui/Button.vue'

import {useCategoryStore} from "@/stores/categories";
import {reactive} from "vue";

defineProps({
  action: {
    type: String,
    default: ''
  },
  is: {
    type: String,
    default: ''
  },
  item: {
    type: Object,
    default: {}
  }
})

const categoryItem = reactive({
  id: '',
  name: ''
})
const {updateCategory, deleteCategory} = useCategoryStore()
</script>


<template>
  <div :class="$style.addCategoryForm">
    <template v-if="item && action === 'edit'">
      <InputText :vModel="categoryItem.name ? categoryItem.name : item.name" />
      <div :class="$style.addCategoryForm__btn">
        <Button bg="ghost" title="Delete" @click="deleteCategory(item.id)" />
        <Button title="Save" @click="updateCategory(categoryItem)" />
      </div>
    </template>

    <template v-if="action === 'add'">
      <InputText :vModel="categoryItem.name ? categoryItem.name : item.name" />
      <div :class="$style.addCategoryForm__btn">
        <Button title="Save" />
      </div>
    </template>
  </div>
</template>

<style lang="scss" module>
.addCategoryForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
