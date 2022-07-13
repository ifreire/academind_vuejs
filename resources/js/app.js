// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const lisItemEl = document.createElement('li');
//     lisItemEl.textContent = enteredValue;
//     listEl.appendChild(lisItemEl);
//     inputEl.value = "";
// }

// buttonEl.addEventListener('click', addGoal);1

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = "";
        }
    }
}).mount('#app');