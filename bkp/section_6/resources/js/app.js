/*
<script>
    
</script>
*/

import data from '../json/data.json' assert {type: 'json'};

const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
            phoneList: []
        };
    },
    created() {
        this.phoneList = data;
    },
});

app.component('user-contact', {
    template: 
    `
    <li>
        <h2>{{ phoneItem.id }} - {{ phoneItem.name }}</h2>
        <button @click="toggleDetails()">{{ isDetailsVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="isDetailsVisible">
            <li><strong>Phone:</strong> {{ phoneItem.phone }}</li>
            <li><strong>Email:</strong> {{ phoneItem.email }}</li>
        </ul>
    </li>
    `
    ,
    data() {
        return {
            isDetailsVisible: false,
            phoneItem: {
                id: 1,
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com"
            },
        }
    },
    methods: {
        toggleDetails() {
            this.isDetailsVisible = !this.isDetailsVisible;
        },
    }
});

app.mount("#app");