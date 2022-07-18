<script setup>
import InputText from '@/components/ui/InputText.vue'
import Button from '@/components/ui/Button.vue'

const productForm = {
  title: '',
  sku: '',
  price: ''
}

defineProps({})
</script>


<template>
  <div :class="$style.addCategoryForm">
    <InputText placeholder="Product Title" :v-model="productForm.title"/>
    <InputText placeholder="SKU" :v-model="productForm.sku"/>
    <InputText placeholder="Price" :v-model="productForm.price"/>
    <Button :class="$style.addCategoryForm__btn" title="Add Product"/>
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
