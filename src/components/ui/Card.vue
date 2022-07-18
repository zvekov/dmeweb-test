<script setup>
import InputCheckbox from '@/components/ui/InputCheckbox.vue'

defineProps({
  item: {
    type: Object,
    default: {}
  }
})
</script>

<template>
  <div :class="$style.card">
    <InputCheckbox :class="$style.card__checkbox" :name="`product-${item.id}`" />
    <img :src="item.images[0].src" :class="$style.card__image"/>
    <div :class="$style.card__desc">
      <p :class="$style.card__desc__sku">{{item.sku}}</p>
      <h3>{{ item.name }}</h3>
    </div>
  </div>
</template>

<style lang="scss" module>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #E1E1E1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  background-color: #FFFFFF;
  padding: 1rem;

  &__image {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }

  &__checkbox {
    position: absolute;
    right: 0;
    top: 0;
    margin: 14px;
  }

  &__desc {
    margin-right: auto;

    &__sku {
      padding: 1.5rem 0 0.5rem;
      color: #14446E;
      font-weight: 600;
      font-size: 16px;
      line-height: 113%;
    }

    h3 {
      font-weight: 400;
      font-size: 14px;
      line-height: 120%;
      color: #8C99AF;
    }
  }
}
</style>
