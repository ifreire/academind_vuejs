const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredGoalValue: ''
        };
    },
    methods: {
        addGoal() {
            if (this.enteredGoalValue.trim() !== "")
                this.goals.push(this.enteredGoalValue.trim());

            this.enteredGoalValue = "";
        },
        removeGoal(idx) {
            this.goals.splice(idx, 1);
        }
    }
});

app.mount('#user-goals');