const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
        },
    },
});

const app2 = Vue.createApp({
    // template: `
    //     <h2>Favorite Meal</h2>
    //     <input type="text" @input="saveInput" />
    //     <button @click="setText">Set Text</button>    
    //     <p>{{ message }}</p>
    // `,
    data() {
        return {
            favoriteMeal: "",
            message: "I love PIZZA!",
        };
    },
    methods: {
        saveInput(event) {
            this.favoriteMeal = event.target.value;
        },
        setText() {
            this.message = this.favoriteMeal;
        },
    },
    beforeCreate() {
        console.log("beforeCreate()");
    },
    created() {
        console.log("created()");
    },
    beforeMount() {
        console.log("beforeMount()");
    },
    mounted() {
        console.log("mounted()");
    },
    beforeUpdate() {
        console.log("beforeUpdate()");
    },
    updated() {
        console.log("updated()");
    },
    beforeUnmount() {
        console.log("beforeUnmount()");
    },
    unmounted() {
        console.log("unmounted()");
    },
});

app.mount("#app");
app2.mount("#app2");

setTimeout(function() {
    app2.unmount();
}, 3000);