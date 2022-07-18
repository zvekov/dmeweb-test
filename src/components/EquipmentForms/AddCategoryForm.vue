<script setup>
import InputText from '@/components/ui/InputText.vue'
import Button from '@/components/ui/Button.vue'
import {reactive} from "vue";
import {useCategoryStore} from "@/stores/categories";
import {storeToRefs} from "pinia/dist/pinia";

const {addCategory} = useCategoryStore()
defineProps({
  is: {
    type: String,
    default: ''
  }
})
const addCategoryData = reactive({
  id: "",
  name: "",
  parent: ""
})
</script>


<template>
  <div :class="$style.addCategoryForm">
    <template v-if="is === 'category'">
      <InputText placeholder="Category Title" :v-model="addCategoryData.name"/>
      <Button :class="$style.addCategoryForm__btn" @click="addCategory(addCategoryData)" title="Add Category" />
    </template>
    <template v-if="is === 'subcategory'">
      <InputText placeholder="Subcategory Title" :v-model="addCategoryData.name"/>
      <Button :class="$style.addCategoryForm__btn" title="Add Subcategory" />
    </template>
  </div>
</template>

<style lang="scss" module>
.addCategoryForm {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__btn {
    margin-left: auto;
  }
}
</style>
