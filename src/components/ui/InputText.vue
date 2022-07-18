<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  vModel: {
    type: String
  },
})
</script>

<template>
  <div :class="$style.InputSearch">
    <label v-if="label">{{label}}</label>
    <input type="text" :placeholder="placeholder" v-model="vModel" />
  </div>
</template>

<style lang="scss" module>
.InputSearch {

  & label {
    padding-bottom: 0.5rem;
    line-height: 24px;
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 1rem;
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
