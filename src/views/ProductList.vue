<template>
  <div class="product-list">
    <h1>Product List</h1>
    <div class="container">
      <div v-for="products in groupedProducts" :key="products.id" class="row">
        <div v-for="product in products" :key="product.id" class="col">
          <div class="card shadow-sm p-3 mb-5 bg-white rounded">
            <img
              class="card-img-top"
              v-bind:src="`http://localhost:5000/image/${product.img}`"
              alt="Card image cap"
              style="width: 100px;"
            />
            <div class="card-body">
              <h5 class="card-title">{{product.product}}</h5>
              <p class="card-text">{{product.price}}</p>
              <router-link :to="{ name: 'ProductDescription', params: { product: product} }">
                <button
                  @click="prodDecription(product)"
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
import axios from "axios";

export default {
  name: "ProductList",
  data: () => {
    return {
      list: []
    };
  },
  methods: {
    addToCart(load) {
      this.dp = JSON.parse(localStorage.getItem("cartData"))
      this.dp.push(load);
     return  localStorage.setItem("cartData", JSON.stringify( this.dp));
    },
    prodDecription(load) {
     localStorage.setItem("productDesc", JSON.stringify(load));
    }
  },
  created() {
    axios
      .get("http://localhost:5000/products")
      .then(res => (this.list = res.data))
      .catch(err => console.log(err));
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
