<script setup>
defineProps({
  name: {
    type: String,
    default: "",
  },
  vModel: {
    type: String,
    default: ''
}
})
</script>
<template>
  <div>

    <input :id="name ? name : 'default-checkbox'" type="checkbox" :name="name" :v-model="vModel" />
    <label :for="name ? name : 'default-checkbox'"></label>
  </div>
</template>

<style scoped>
  /* Base for label styling */
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    left: 0;
    opacity: 0.01;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 20px;
    font-size: 1.05em;
    line-height: 1.7;
    cursor: pointer;
  }

  /* checkbox aspect */
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #aaa;
    background: #FFF;
    border-radius: .2em;
    -webkit-transition: all .275s;
    transition: all .275s;
  }

  /* checked mark aspect */
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: '✕';
    position: absolute;
    top: .52em;
    left: .14em;
    font-size: 20px;
    color: #14446E;
    line-height: 0;
    -webkit-transition: all .2s;
    transition: all .2s;
  }

  /* checked mark aspect changes */
  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0) rotate(45deg);
    transform: scale(0) rotate(45deg);
  }

  [type="checkbox"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }

  /* Disabled checkbox */
  [type="checkbox"]:disabled:not(:checked) + label:before,
  [type="checkbox"]:disabled:checked + label:before {
    box-shadow: none;
    border-color: #bbb;
    background-color: #e9e9e9;
  }

  [type="checkbox"]:disabled:checked + label:after {
    color: #777;
  }

  [type="checkbox"]:disabled + label {
    color: #aaa;
  }
</style>
