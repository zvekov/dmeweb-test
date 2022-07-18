<script setup>
import { useRoute } from 'vue-router'
import { watch, defineAsyncComponent } from 'vue'
import {storeToRefs} from 'pinia'
import {useProductStore} from "../stores/products";
import {useCategoryStore} from "../stores/categories";

import Page from '@/components/ui/Page.vue'

const EquipmentCatalog = defineAsyncComponent(() =>
    import("../components/EquipmentCatalog/EquipmentCatalog.vue")
)
const EquipmentCatalogNavigation = defineAsyncComponent(() =>
    import("../components/EquipmentCatalog/EquipmentCatalogNavigation.vue")
)
const EquipmentList = defineAsyncComponent(() =>
    import('../components/EquipmentList/EquipmentList.vue')
)

const route = useRoute()

const {products, loading, error} = storeToRefs(useProductStore())
const { category } = storeToRefs(useCategoryStore())
const { getMainCategories } = storeToRefs(useCategoryStore())
const {getMainSubCategories} = storeToRefs(useCategoryStore())

const {fetchProductsByCategory} = useProductStore()
const {fetchCategory} = useCategoryStore()
const {fetchCategories} = useCategoryStore()

fetchCategories()
fetchCategory(route.params.id)
fetchProductsByCategory(route.params.id)

watch(
    () => route.params.id,
    newId => {
      category.value = fetchCategory(newId)
      products.value = fetchProductsByCategory(newId)
    }
)


</script>

<template>
  <Page>
    <EquipmentCatalog>
      <template #aside>
        <EquipmentCatalogNavigation :items="getMainCategories" name="category" title="Categories"/>
        <EquipmentCatalogNavigation :items="getMainSubCategories" name="subcategory" title="Subcategories"/>
      </template>
      <template #main>
        <EquipmentList :loading="loading" :error="error" :products="products ? products : []" />
      </template>
    </EquipmentCatalog>
  </Page>
</template>
