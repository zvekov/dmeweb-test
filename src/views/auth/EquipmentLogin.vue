<script setup>
import Page from '@/components/ui/Page.vue'
import LoginForm from '@/components/EquipmentForms/LoginForm.vue'
</script>

<template>
  <Page :class="$style.EquipmentLogin">
    <LoginForm :class="$style.EquipmentLogin__form" />
  </Page>
</template>

<style lang="scss" module>
.EquipmentLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  &__form {
    width: 30rem;
  }
}
</style>
