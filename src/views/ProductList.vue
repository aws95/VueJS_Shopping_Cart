<template>
  <div class="product-list">
    <h1>Product List</h1>
    <div class="container">
      <div v-for="products in groupedProducts" :key="products.id" class="row">
        <div v-for="product in products" :key="product.id" class="col">
          <div class="card shadow-sm p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top"
              src="../assets/logo.png"
              alt="Card image cap"
              style="width: 100px;"
            />
            <div class="card-body">
              <h5 class="card-title">{{product.product}}</h5>
              <p class="card-text">{{product.price}}</p>
              <router-link :to="{ name: 'ProductDescription', params: { product: product} }">
                <button
                  @click="$emit('prod-desc',product.id)"
                  class="btn btn-outline-info"
                >Product Description</button>
              </router-link>
              <router-link to="/cart">
                <button @click="addToCart(product)" class="btn btn-outline-info">
                  <font-awesome-icon icon="cart-plus" />
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import State from "../manageCart";

export default {
  name: "ProductList",
  data: () => {
    return {
      list: [
        {
          id: 1,
          product: "NEW BALANCE TEMPO  ANTHRACITE",
          price: 130.0,
          qty: 1
        },
        { id: 2, product: "MIZUNO DUEL SONIC  ROUGE", price: 115.0, qty: 1 },
        { id: 3, product: "ASICS GE NIMBUS 22  CORAIL", price: 180.0, qty: 1 },
        { id: 4, product: "ASICS GE CUMULUS 21  CORAIL", price: 140.0, qty: 1 },
        {
          id: 5,
          product: "INOV 8 TERRAULTRA G 260  VERT",
          price: 165.0,
          qty: 1
        },
        { id: 6, product: "INOV 8 ROCLITE G 275  ROUGE", price: 155.0, qty: 1 },
        { id: 7, product: "BROOKS GHOST 12  NOIR", price: 140.0, qty: 1 },
        { id: 8, product: "BROOKS CALDERA 4  GRIS", price: 140.0, qty: 1 },
        { id: 9, product: "BROOKS TRANSCEND 7  BLEU", price: 170.0, qty: 1 }
      ]
    };
  },
  methods: {
    addToCart(load) {
      State.add(load);
    }
  },
  computed: {
    groupedProducts() {
      return _.chunk(this.list, 3);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.product-list {
  align-content: center;
}
.card {
  align-items: center;
  margin-bottom: 10px;
}
button {
  margin: 5px;
}
</style>
