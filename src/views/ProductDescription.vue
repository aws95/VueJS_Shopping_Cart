<template>
  <div class="description">
    <div class="container card">
      <div class="row card-body">
        <div class="col-6 justify-content-center align-self-center">
          <img
            class="img-fluid"
            v-bind:src="`http://localhost:5000/image/${this.pr.img}`"
            alt="Product"
          />
        </div>
        <div class="col-6">
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h3>{{this.pr.product}}</h3>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h3>{{this.pr.price}} €</h3>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h6>In Stock :{{this.pr.stock}}</h6>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h6>Available Sizes : {{this.pr.sizes}}</h6>
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
import State from "../manageCart";
export default {
  name: "Home",
  created() {
    this.pr = this.$route.params.product;
  },
  mounted() {
    this.payload = JSON.parse(localStorage.getItem("apiData"));
    this.result = this.payload.find(product => product._id == this.$route.params.product._id);
  },
  methods: {
    addToCart(load) {
      State.add(load);
      console.log(this.result);
      this.$swal("Your Product Is Added To Your Cart");
    }
  }
};
</script>
<style scoped>
.description {
  margin-top: 50px;
}
</style>