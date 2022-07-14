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
            courseGoal: "Learn VueJS!",
            courseGoalA: "Finish the curse and learn VueJS!",
            courseGoalB: "Master VueJS and build amazing apps!",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5)
                return this.courseGoalA;
            else
                return this.courseGoalB;
        }
    }
});

app_user_goal.mount('#user-goal');
