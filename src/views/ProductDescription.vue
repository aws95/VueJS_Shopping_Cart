<template>
  <div class="description">
    <div class="container card">
      <div class="row card-body">
        <div class="col-6 justify-content-center align-self-center">
          <img
            class="img-fluid"
            v-bind:src="`http://localhost:5000/image/${this.payload.img}`"
            alt="Product"
          />
        </div>
        <div class="col-6">
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h3>{{this.payload.product}}</h3>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h3>{{this.payload.price}} €</h3>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h6>In Stock :{{this.payload.stock}}</h6>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h6>Available Sizes : {{this.payload.sizes}}</h6>
          </div>
          <div class="card-body">
            <button
              @click="addToCart(pr)"
              type="button"
              class="shadow p-3 mb-5 rounded btn btn-info"
            >
              Add to Cart
              <font-awesome-icon icon="cart-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: () => {
    return {
      payload: []
    };
  },
  created() {
    this.prodD = JSON.parse(localStorage.getItem("productDesc"));
    this.pr = this.$route.params.product;
    this.prodD = JSON.parse(localStorage.getItem("productDesc"));
    axios
      .get(`http://localhost:5000/products/${this.prodD._id}`)
      .then(res => (this.payload = res.data))
      .catch(err => console.log(err));
  },
  mounted() {
   this.prodD = JSON.parse(localStorage.getItem("productDesc"));
  },
  methods: {
    addToCart(load) {
      this.dp = JSON.parse(localStorage.getItem("cartData"));
      this.dp.push(load);
      this.$swal("Your Product Is Added To Your Cart");
      return localStorage.setItem("cartData", JSON.stringify(this.dp));
    }
  }
};
</script>
<style scoped>
.description {
  margin-top: 50px;
}
</style>