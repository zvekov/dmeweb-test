<script setup>
import {onMounted, onUnmounted, ref} from "vue";

defineProps({
  alert: {
    type: Object,
    default: {}
  }
})

const alertShow = ref(false)

onMounted(() => {
  alertShow.value = true
})
onUnmounted(() => {
  alert.value = null
})

function hideAlert() {
  window.setInterval(() => {
    alertShow.value = false;
  }, 3000)
}
hideAlert()
</script>

<template>
  <div v-if="alertShow" :class="$style.Alert" :style="alert.type = 'success' ? 'background-color: green;' : 'background-color: red;'">
    {{alert.text}}
  </div>
</template>

<style lang="scss" module>
.Alert {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  padding: 1rem;
  color: #FFFFFF;
  border-radius: 2px;
}
</style>
