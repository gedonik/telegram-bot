<template>
  <div class="cart">
    <div class="cart__wrapper">
      <div class="cart__header">
        <h2 class="cart__title">Your order</h2>
        <router-link to="/" style="text-decoration: none">
          <div class="cart__to-catalog">Edit</div>
        </router-link>
      </div>

      <AppCartItem
          class="cart__item"
          v-for="cartItemProduct in cart"
          :key="cartItemProduct.id"
          :cartItemProduct="cartItemProduct"
      />


      <form class="form cart__form" @submit.prevent>
        <label
            class="form__label"
            for="comment"
        >
          <input
              v-model="orderComment"
              class="form__input"
              type="text"
              id="comment"
              placeholder="Add comment..."
          >
          Any special requests, details, final wishes etc.
        </label>
      </form>
    </div>

    <footer class="footer">
      <button class="footer__pay" type="submit">Pay ${{ cartTotalCost }}</button>
    </footer>
  </div>
</template>

<script>
import AppCartItem from "@/components/AppCartItem";
import {mapState} from "vuex";

export default {
  name: "AppCart",
  components: {AppCartItem},
  data() {
    return {
      orderComment: '',
    }
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    cartTotalCost() {
      let result = [];

      if (this.cart.length) {
        for (let product of this.cart) {
          result.push(product.price.toFixed(2) * product.quantity.toFixed(2));
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        })

        result.toFixed(2);
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  position: relative;

  &__wrapper {
    height: 475px;
    overflow-y: scroll;
    background-color: #000;
  }

  &__header {
    padding: 0 20px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1F2937;
  }

  &__title {
    text-transform: uppercase;
    font-size: 16px;
  }

  &__to-catalog {
    color: green;
  }
}

.form {
  padding: 20px;

  &__input {
    margin-top: 10px;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    font-size: 16px;
    background-color: #1F2937;
    border-color: transparent;
    outline: transparent;
    caret-color: #fff;
    color: #fff;
  }

  &__label {
    color: #797a7a;
  }
}

.footer {
  position: sticky;
  display: block;
  bottom: 0;
  width: 100%;

  &__pay {
    background-color: #3cb639;
    padding: 20px 0;
    width: 100%;
    text-transform: uppercase;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    border-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #43c541;
    }
  }
}
</style>