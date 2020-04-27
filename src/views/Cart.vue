<template>
  <p class="cart-empty" v-if="total == 0">Your Shopping Cart is Empty!</p>
  <div class="cart" v-else>
    <div class="row">
      <div class="col">
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Number Of Items</th>
                <th scope="col">Item Price</th>
                <th scope="col">Add Item</th>
                <th scope="col">Delete Item</th>
                <th scope="col">Remove Item From Cart</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <th>{{item.product}}</th>
                <td>{{item.qty}}</td>
                <td>{{item.qty * item.price}}</td>
                <td>
                  <button type="button" class="btn btn-success" @click="inc(item)">
                    <span class="badge badge-success">
                      <font-awesome-icon icon="plus" />
                    </span>
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger" @click="dec(item)">
                    <span class="badge badge-danger">
                      <font-awesome-icon icon="times-circle" />
                    </span>
                  </button>
                </td>
                <td>
                  <button type="button" class="btn btn-danger" @click="remove(item)">
                    <span class="badge badge-danger">
                      <font-awesome-icon icon="trash" />
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card-body d-flex flex-row-reverse bd-highlight">Total :{{total}} €</div>
      </div>
    </div>
  </div>
</template>

<script>
import State from "../manageCart";
import _ from "lodash";
export default {
  data() {
    return {
      items: JSON.parse(localStorage.getItem("cartData"))
    };
  },
  created() {
    //localStorage.setItem('cartData',JSON.stringify(State.data.cart));
  },
  methods: {
    inc(data) {
      State.inc(data);
      this.items = JSON.parse(localStorage.getItem("cartData"));
    },
    dec(data) {
      State.dec(data);
      this.items = JSON.parse(localStorage.getItem("cartData"));
    },
    remove(data) {
      State.remove(data);
      this.items = JSON.parse(localStorage.getItem("cartData"));
    }
  },
  computed: {
    total() {
      return _.sumBy(this.items, function(item) {
        return item.price * item.qty;
      });
    }
  }
};
</script>

<style scoped>
.cart {
  margin-top: 50px;
}
</style>
