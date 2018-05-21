const PRICE = 9.99;

new Vue({
    el: "#app",
    data: {
        total: 0,
        items: [
            {id: 1, title: 'Item1'},
            {id: 2, title: 'Item2'},
            {id: 3, title: 'Item3'}
        ],
        cart:[]
    },
    filters: {
        currency: function(item){
            return `$ ${item.toFixed(2)}`;
        }
    },
    methods: {
        addToCart(index) {
            let item = this.items[index];
            let itemCart = this.cart.find((x => x.id == item.id))
            
            if (itemCart){
                itemCart.qty++;
            } else {
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: PRICE
                })
            }

            this.total += PRICE;
        },
        inc(index){
            this.cart[index].qty++;
            this.total += PRICE;
        },
        dec(index){
            this.cart[index].qty--;
            this.total -= PRICE;
            if (this.cart[index].qty == 0) {
                this.cart.splice(index, 1);
            }
        }
    }
})
