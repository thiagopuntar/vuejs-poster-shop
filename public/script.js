new Vue({
    el: "#app",
    data: {
        items: [
            {id: 1, title: 'Item1'},
            {id: 2, title: 'Item2'},
            {id: 3, title: 'Item3'}
        ],
        cart:[]
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
                    qty: 1
                })
            }
        }
    }
})
