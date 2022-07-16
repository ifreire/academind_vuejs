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
        setName(event) {
            this.name = event.target.value;
        },
        submitForm() {
            //
        },
        confirmName() {
            this.confirmedName = this.name;
        },
        nothing() {
            //
        },
        resetInput() {
            this.name = "";
        },
        outputFullname() {
            console.log('outputFullname');
            
            if (this.name === '')
                return '';
            
            return this.name + ' ' + 'Freire';
        }
    },
    computed: {
        fullname() {
            console.log('fullname');

            if (this.name === '')
                return '';
            
            return this.name + ' Freire';
        }
    }
});

app.mount('#events');