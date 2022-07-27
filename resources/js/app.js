const events = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            confirmedName: "",
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
        confirmName() {
            this.confirmedName = this.name;
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

const styling = Vue.createApp({
    data() {
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
        };
    },
    methods: {
        boxSelected(box) {
            if (box ==="A") {
                this.boxAselected = true;
                this.boxBselected = false;
                this.boxCselected = false;
            }
            else if (box ==="B") {
                this.boxAselected = false;
                this.boxBselected = true;
                this.boxCselected = false;
            }
            else if (box ==="C") {
                this.boxAselected = false;
                this.boxBselected = false;
                this.boxCselected = true;
            }
        }
    }
});

events.mount('#events');
styling.mount('#styling');