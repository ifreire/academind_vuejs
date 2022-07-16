const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            confirmedName: "",
            //fullname: ""
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

            if (this.name === '' || this.lastName === '')
                return '';
            
            return this.name + ' ' + this.lastName;
        }
    },
    watch: {
        // name(value) {
        //     if (value === '')
        //         this.fullname = '';
        //     else
        //         this.fullname = value + ' Freire';
        // },
        // lastName(value) {
        //     if (value === '')
        //         this.fullname = '';
        //     else
        //         this.fullname = this.name + ' ' + value;
        // }
        counter(value) {
            if (value > 50) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0;
                }, 2000);
            }
        }
    }
});

app.mount('#events');