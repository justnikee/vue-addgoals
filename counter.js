const count = Vue.createApp({
    data() {
        return {
            count: 0,
        }
    },
    method: {
        add() {
            this.count = this.count + 1
        },
        reduce() {
            count = count - 1
        }
    }
}).mount('#counter')

