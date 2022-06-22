<template>
  <ul class="catalog">
    <AppCatalogItem
        v-for="product in PRODUCTS"
        :key="product.id"
        :product="product"
        @addToCart="addToCart"
        @addProduct="addProduct"
        @removeProduct="removeProduct"
    />
  </ul>

  <footer class="footer">
    <router-link v-if="CART.length" to="/cart" style="text-decoration: none">
      <div class="footer__order">View order</div>
    </router-link>
    <h2 v-else class="footer__item footer__title">@DurgerKingBot</h2>
  </footer>
</template>

<script>
import AppCatalogItem from "@/components/AppCatalogItem";
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "AppCatalog",
  components: {AppCatalogItem},
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
      'ADD_PRODUCT',
      'REMOVE_PRODUCT'
    ]),
    addToCart(product, quantity) {
      product.quantity = quantity;
      this.ADD_TO_CART(product);
    },
    addProduct(id) {
      this.ADD_PRODUCT(id)
    },
    removeProduct(id) {
      this.REMOVE_PRODUCT(id)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  padding: 15px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  height: 475px;
  overflow-y: scroll;
}

.footer {
  &__item {
    padding: 10px 0;
    text-align: center;
  }

  &__title {
    font-size: 14px;
    opacity: 0.4;
  }

  &__order {
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    background-color: #3cb639;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: #43c541;
    }
  }
}
</style>