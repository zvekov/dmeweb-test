<script setup>
import {defineAsyncComponent, ref} from 'vue'
import {useModalStore} from "@/stores/modal";

const Button = defineAsyncComponent(() =>
    import('@/components/ui/Button.vue')
)
const Modal = defineAsyncComponent(() =>
    import('@/components/ui/Modal.vue')
)
const AddCategoryForm = defineAsyncComponent(() =>
    import('@/components/EquipmentForms/AddCategoryForm.vue')
)
const CategoryForm = defineAsyncComponent(() =>
    import('@/components/EquipmentForms/CategoryForm.vue')
)

import AddIcon from "@/assets/icons/add.svg?raw"
import EditIcon from "@/assets/icons/edit.svg?raw"

defineProps({
  name: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ""
  },
  items: {
    type: Array,
    default: []
  }
})

const modalState = useModalStore()
const {toogleAddCategoryForm, toogleSubCategoryForm, categoryEdit} = useModalStore()

</script>
<template>
  <div :class="$style.EquipmentCatalogNavigation">
    <div :class="$style.EquipmentCatalogNavigation__header">
      <h3 v-if="title">{{ title }}</h3>
      <Button v-if="name === 'category'" :icon="AddIcon" @click="toogleAddCategoryForm"/>
      <Button v-if="name === 'subcategory'" :icon="AddIcon" @click="toogleSubCategoryForm"/>
      <Teleport to="#modals">
        <Modal v-if="modalState.addCategoryFormShow">
          <AddCategoryForm :is="'category'" />
        </Modal>
        <Modal v-if="modalState.addSubCategoryFormShow">
          <AddCategoryForm :is="'subcategory'"/>
        </Modal>
      </Teleport>
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        <span>
          <router-link :to="{ name: name, params: { id: item.id, parent: item.parent }}">{{ item.name }}</router-link>
          <Button @click="categoryEdit(item)" :icon="EditIcon" bg="ghost"/>
        </span>
      </li>
    </ul>
    <Teleport to="#modals">
      <Modal v-if="modalState.categoryFormShow">
        <CategoryForm action="edit" is="category" :item="modalState.editItem"/>
      </Modal>
    </Teleport>
  </div>
</template>

<style lang="scss" module>
.EquipmentCatalogNavigation {
  border-right: 1px solid #E1E1E1;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-bottom: 1px solid #E1E1E1;

    h3 {
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      color: #2D5A81;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;

    & li {
      border-bottom: 1px solid #E1E1E1;
      transition: all .3s;

      &:hover {
        background-color: #F5F7FB;
        border-color: #05A3AD;
      }

      & > span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.25rem 0.5rem 0.25rem 1rem;

        & a {
          text-decoration: none;
          flex: 1;
        }
      }
    }
  }
}
</style>
