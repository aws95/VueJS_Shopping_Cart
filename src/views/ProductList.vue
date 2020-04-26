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
import axios from "axios";

export default {
  name: "ProductList",
  data: () => {
    return {
      list: JSON.parse(localStorage.getItem("apiData"))
    };
  },
  created() {
    axios
      .get("http://localhost:5000/products")
      .then(res => localStorage.setItem("apiData", JSON.stringify(res.data)))
      .catch(err => console.log(err));
  },
  mounted() {
    this.checkStorage(this.list);
  },
  methods: {
    addToCart(load) {
      State.add(load);
    },
    checkStorage(key) {
      if (localStorage.getItem(key)) {
        try {
          this[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          localStorage.removeItem(key);
        }
      }
    },
    saveStorage() {
      localStorage.setItem(JSON.stringify(this.list));
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
