// const user_goal_app = Vue.createApp({
//     data() {
//         return {
//             goals: [],
//             enteredValue: "",
//         };
//     },
//     methods: {
//         addGoal() {
//             this.goals.push(this.enteredValue);
//             this.enteredValue = "";
//         },
//     },
// }).mount("#app");


const app_user_goal = Vue.createApp({
    data() {
        return {
            courseGoal: "Finish the curse and learn VueJS!",
            vueLink: "https://vuejs.org"
        };
    }
});

app_user_goal.mount('#user-goal');
