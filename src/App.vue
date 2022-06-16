<template>
  <div class="app">
    <AppHeader/>

    <AppCatalog
        :products="products"
    />
    <AppCart/>

    <AppFooter/>
  </div>
</template>

<script>
import AppCatalog from "@/components/AppCatalog";
import AppCart from "@/components/AppCart";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {AppFooter, AppHeader, AppCart, AppCatalog},
  data() {
    return {
      products: [
        {
          "id": 1234,
          "image": "burger.png",
          "name": "Burger",
          "price": "4.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 456,
          "image": "fries.png",
          "name": "Fires",
          "price": "1.49",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 56756,
          "image": "hotdog.png",
          "name": "Hotdog",
          "price": "3.49",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 123624,
          "image": "tako.png",
          "name": "Tako",
          "price": "3.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventoripsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 5,
          "image": "pizza.png",
          "name": "Pizza",
          "price": "7.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 78,
          "image": "donut.png",
          "name": "Donut",
          "price": "1.49",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 55,
          "image": "popcorn.png",
          "name": "Popcorn",
          "price": "1.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 66,
          "image": "cola.png",
          "name": "Cola",
          "price": "1.49",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 1233456,
          "image": "cake.png",
          "name": "Cake",
          "price": "10.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 6789,
          "image": "icecream.png",
          "name": "Icecream",
          "price": "5.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 90789,
          "image": "cookie.png",
          "name": "Cookie",
          "price": "3.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        },
        {
          "id": 34589,
          "image": "flan.png",
          "name": "Flan",
          "price": "7.99",
          "description": "Aperiam assumenda at dicta dolorem, doloremque doloribus enim excepturi explicabo fuga in incidunt inventorepsa laborum laudantium maiores quam quas qui quo repellat repellendus sapiente totam, vitae voluptate voluptates voluptatibus."
        }
      ],
      cart: [],
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background-color: #1F2937;
  color: #fff;
  border-radius: 7px;
  box-shadow: 0 0 8px 3px rgba(34, 60, 80, 0.2);
}
</style>
