<script setup>
import {storeToRefs} from 'pinia'

import {useProductStore} from "../stores/products";
import {useCategoryStore} from "../stores/categories";

import Page from '@/components/ui/Page.vue'
import {defineAsyncComponent} from 'vue'

const EquipmentCatalog = defineAsyncComponent(() =>
    import("../components/EquipmentCatalog/EquipmentCatalog.vue")
)
const EquipmentCatalogNavigation = defineAsyncComponent(() =>
    import("../components/EquipmentCatalog/EquipmentCatalogNavigation.vue")
)
const EquipmentList = defineAsyncComponent(() =>
    import('../components/EquipmentList/EquipmentList.vue')
)

const {allProducts, loading, error} = storeToRefs(useProductStore())
const {getMainCategories} = storeToRefs(useCategoryStore())
const {fetchProducts} = useProductStore()
const {fetchCategories} = useCategoryStore()

fetchCategories()
fetchProducts()


</script>

<template>
  <Page>
    <EquipmentCatalog>
      <template #aside>
        <EquipmentCatalogNavigation :items="getMainCategories" name="category" title="Categories"/>
      </template>
      <template #main>
        <EquipmentList :loading="loading" :error="error" :products="allProducts ? allProducts : []"/>
      </template>
    </EquipmentCatalog>
  </Page>
</template>
