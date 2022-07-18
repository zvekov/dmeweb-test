<script setup>
defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  },
  vModel: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="$style.InputSearch">
    <input type="text" :placeholder="placeholder" v-model="vModel" />
  </div>
</template>

<style lang="scss" module>
.InputSearch {
  input {
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem 0.5rem 3rem;
    border: 1px solid #E1E1E1;
    border-radius: 2px;
    height: 3rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #14446E;

    &::placeholder {
      color: #B7BFCD;
    }
  }
}
</style>
