<script setup>
import CloseIcon from '@/assets/icons/close.svg'
import {useModalStore} from "@/stores/modal";
import {onMounted, onUnmounted} from "vue";

const {toogleModal} = useModalStore()

onMounted(() => {
  document.body.classList.add('is-modal')
})
onUnmounted(() => {
  document.body.classList.remove('is-modal')
})
</script>

<template>
  <div :class="$style.Modal">
    <div :class="$style.Modal__wrapper">
      <span :class="$style.Modal__wrapper__close" @click="toogleModal">
        <CloseIcon />
      </span>
      <slot/>
    </div>
  </div>
</template>

<style lang="scss" module>
.Modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    position: relative;
    width: calc(100% / 2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    border: 1px solid #E1E1E1;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 2rem;

    &__close {
      position: absolute;
      right: 0;
      top: 0;
      margin-top: -2rem;
      margin-right: -2rem;
      width: 2rem;
      height: 2rem;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
}
</style>
