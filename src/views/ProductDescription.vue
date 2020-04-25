<template>
  <div class="description">
    <div class="container card">
      <div class="row card-body">
        <div class="col-6 justify-content-center align-self-center">
          <img
            class="card-img-top"
            src="../assets/logo.png"
            alt="Card image cap"
            style="width: 100px;"
          />
        </div>
        <div class="col-6">
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h3>{{this.$route.params.product.product}}</h3>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h3>{{this.$route.params.product.price}} €</h3>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h6>In Stock :</h6>
          </div>
          <div class="card-body font-weight-bold" style="color: #41B883;">
            <h6>Available Sizes :</h6>
          </div>
          <div class="card-body">
            <button
              @click="addToCart(this.$route.params.product)"
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
  methods: {
    addToCart(load) {
      State.add(load);
    }
  }
};
</script>
<style scoped>
.description {
  margin-top: 50px;
}
</style>