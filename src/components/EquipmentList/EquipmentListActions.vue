<script setup>
import Button from '@/components/ui/Button.vue'
import AddIcon from "@/assets/icons/add.svg?raw"
import ExportIcon from "@/assets/icons/export.svg?raw"
import CopyIcon from "@/assets/icons/copy.svg?raw"
import DeleteIcon from "@/assets/icons/delete.svg?raw"

import Modal from '@/components/ui/Modal.vue'
import AddProductForm from '@/components/EquipmentForms/AddProductForm.vue'
import {useModalStore} from "@/stores/modal";

const modalState = useModalStore()
const {toogleProductForm} = useModalStore()

</script>
<template>
  <div :class="$style.CategoryActions">
    <Button :icon="AddIcon" @click="toogleProductForm"/>
    <Teleport to="#modals">
      <Modal v-if="modalState.addProductFormShow">
        <AddProductForm/>
      </Modal>
    </Teleport>
    <Button :icon="ExportIcon" title="Export" bg="primary"/>
    <Button :icon="CopyIcon" title="Move & Copy" bg="primary"/>
    <Button :icon="DeleteIcon" title="Delete" bg="primary"/>
  </div>
</template>
<style lang="scss" module>
.CategoryActions {
  display: flex;
  gap: 1rem;
}
</style>
