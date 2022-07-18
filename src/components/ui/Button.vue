<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  bg: {
    type: String,
    default: ''
  },
  icon: {
    type: String || Object,
    default: ''
  }
})
</script>

<template>
  <button :class="`${$style.button} ${bg === '' ? 'btn__default' : `btn__${bg}`}`"
          :style="`padding:0.5rem ${title ? '1rem' : '0.5rem'}`">
    <span v-if="icon" :class="$style.button__icon" v-html="icon"/>
    <span v-if="title">{{ title }}</span>
  </button>
</template>

<style lang="scss" module>
.button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
