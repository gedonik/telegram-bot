<template>
  <ul class="catalog">
    <AppCatalogItem
        v-for="product in products"
        :key="product.id"
        :product="product"
        :productCounter="productCounter"

    />
  </ul>
</template>

<script>
import AppCatalogItem from "@/components/AppCatalogItem";

export default {
  name: "AppCatalog",
  components: {AppCatalogItem},
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.catalog {
  padding: 15px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  height: 459px;
  overflow-y: scroll;
}
</style>