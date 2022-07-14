const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        addCounter(num) {
            this.counter += num;
        },
        subCounter(num) {
            this.counter -= num;
        }
    }
});

app.mount('#events');