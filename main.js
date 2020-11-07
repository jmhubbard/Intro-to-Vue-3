const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeCart() {
            if (this.cart.length > 0) {
                this.cart.pop()
            }
        }
    }
})
