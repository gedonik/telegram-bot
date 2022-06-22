<template>
  <li class="product">
    <article>
      <div class="product__img-wrapper">
        <img
            :src=" require('../assets/icons/' + product.image) "
            class="product__img"
            width="70"
            height="70"
            alt="product"
        >
        <span class="product__counter" v-if="!addBtnActive">{{ product.quantity }}</span>
      </div>

      <div class="product__info">
        <span class="product__name">{{ product.name }}</span>
        ·
        <strong class="product__price">${{ product.price }}</strong>
      </div>


      <button
          v-if="addBtnActive"
          class="product__add"
          type="button"
          @click="addToCart"
      >
        Add
      </button>

      <div v-else class="quantity">
        <button class="quantity__item quantity__item--minus" type="button" @click="removeProduct">-</button>
        <button class="quantity__item quantity__item--plus" type="button" @click="addProduct">+</button>
      </div>

    </article>
  </li>
</template>

<script>
export default {
  name: "AppCatalogItem",
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      addBtnActive: true,
      productQuantity: 1,
    }
  },
  methods: {
    addToCart() {
      this.addBtnActive = !this.addBtnActive;
      this.$emit('addToCart', this.product, this.productQuantity);
    },
    removeProduct() {
      this.$emit('removeProduct', this.product.id);
      if (this.product.quantity === 0) {
        this.addBtnActive = true;
      }
    },
    addProduct() {
      this.$emit('addProduct', this.product.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__img-wrapper {
    position: relative;
  }

  &__img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin-bottom: 3px;
    cursor: pointer;
  }

  &__counter {
    position: absolute;
    top: -15px;
    right: -10px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fca405;
    color: #fff;
    border-radius: 50%;
  }

  &__info {
    margin-bottom: 7px;
  }

  &__name {
    font-size: 13px;
  }

  &__price {
    font-size: 15px;
  }

  .quantity {
    display: flex;

    &__item {
      padding: 5px 15px;
      border-radius: 7px;
      color: #fff;
      cursor: pointer;
    }

    &__item--minus {
      margin-right: 3px;
      background-color: #e73a3a;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: #ef7070;
      }
    }

    &__item--plus {
      background-color: #fca405;
      transition: background-color 0.3s ease-in-out;
      &:hover {
        background-color: #f3b952;
      }
    }
  }

  &__add {
    padding: 5px 20px;
    border-color: transparent;
    border-radius: 7px;
    background-color: #fca405;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f3ba50;
    }
  }
}
</style>