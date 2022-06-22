<template>
  <div class="cart-item">
    <div class="cart-item__info">
      <img
          class="cart-item__img"
          :src=" require('../assets/icons/' + cartItemProduct.image) "
          alt="product"
          width="40"
          height="40"
      >
      <div>
        <div class="cart-item__about">
          <span class="cart-item__name">
            {{ cartItemProduct.name }}
            <span class="cart-item__quantity">{{ cartItemProduct.quantity }}x</span>
          </span>
          <span class="cart-item__short">{{ cartItemProduct.short }}</span>
        </div>
      </div>

    </div>
    <strong class="cart-item__price">${{ (cartItemProduct.quantity * cartItemProduct.price).toFixed(2) }}</strong>
  </div>
</template>

<script>
export default {
  name: "AppCartItem",
  props: {
    cartItemProduct: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1F2937;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-right: 20px;
    cursor: pointer;
  }

  &__name {
    display: flex;
    font-size: 18px;
    font-weight: 700;
  }

  &__quantity {
    margin-left: 5px;
    color: #fca405;
  }

  &__short {
    font-size: 14px;
    color: #7085a2;
  }
}
</style>