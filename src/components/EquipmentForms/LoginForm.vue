<script setup>
import InputText from '@/components/ui/InputText.vue'
import Button from '@/components/ui/Button.vue'
import router from "../../router";

const authForm = {
  username: "test",
  password: "test",
}

function authLogin() {
  router.push('/catalog')
}
</script>

<template>
  <div :class="$style.LoginForm">
    <span :class="$style.LoginForm__title">Login</span>
    <InputText placeholder="Username" :v-model="authForm.username"/>
    <InputText placeholder="Password" :v-model="authForm.password"/>
    <Button :class="$style.LoginForm__btn" @click="authLogin" title="Login to dashboard"/>
  </div>
</template>

<style lang="scss" module>
.LoginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #E1E1E1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  background-color: #FFFFFF;
  padding: 2rem;

  &__title {
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 2.5rem;
    text-align: center;
  }

  &__btn {
    display: flex;
    justify-content: center;
    font-size: 1rem;
    margin-left: auto;
  }
}
</style>
