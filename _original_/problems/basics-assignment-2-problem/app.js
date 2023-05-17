const app = Vue.createApp({
    data() {
        return {
            OUTPUT_1: "OUTPUT",
            OUTPUT_2: "OUTPUT",
        };
    },
    methods: {
        showAlert() {
            alert("Button Show Alert clicked.");
        },
        setOutput1(event) {
            this.OUTPUT_1 = event.target.value;
        },
        setOutput2(event) {
            this.OUTPUT_2 = event.target.value;
        }
    }
});

app.mount('#assignment');