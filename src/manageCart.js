import _ from "lodash"
export default {
    data: {
        cart: [
        ]
    }
    ,
    add(product) {
        var found = _.find(this.data.cart, ['id', product.id])
        if (typeof found != 'object') {
            this.data.cart.push({
                id: product._id,
                product: product.product,
                price: product.price,
                qty: product.qty
            })
        }
    },
    remove(product) {
        let dp = JSON.parse(localStorage.getItem("cartData"));
        let index = dp.indexOf(product);
        dp.splice(index, 1);
        localStorage.setItem("cartData", JSON.stringify(dp));
    },
    inc(product) {
        let dp = JSON.parse(localStorage.getItem("cartData"));
        let index = dp.findIndex(element => element._id == product._id);
        dp[index].qty++;
        localStorage.setItem("cartData", JSON.stringify(dp));
    },
    dec(product) {
        let dp = JSON.parse(localStorage.getItem("cartData"));
        let index = dp.findIndex(element => element._id == product._id);

        if (dp[index].qty == 1) {
            this.remove(product)
        } else {
            dp[index].qty--
        }
        localStorage.setItem("cartData", JSON.stringify(dp));
    }

}