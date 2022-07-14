const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: ""
        };
    },
    methods: {
        addCounter(num) {
            this.counter += num;
        },
        subCounter(num) {
            this.counter -= num;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        submitForm() {
            //
        },
        confirmName() {
            this.confirmedName = this.name;
        },
        nothing() {
            //
        }
    }
});

app.mount('#events');