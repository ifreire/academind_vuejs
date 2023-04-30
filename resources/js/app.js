function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            curretnRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyles () {
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles () {
            return { width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack() {
            return this.curretnRound % 3 !== 0;
        }
    },
    watch: {
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "DRAW";
            }
            else if (value <= 0) {
                this.winner = "PLAYER";
            }
        },
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "DRAW";
            }
            else if (value <= 0) {
                this.winner = "MONSTER";
            }
        }
    },
    methods: {
        playerAttack() {
            this.curretnRound++;
            const actionValue = getRandomValue(12, 5);
            this.monsterHealth -= actionValue;
            if (this.monsterHealth < 0) this.monsterHealth = 0
            this.addLogMessage('PLAYER', 'attack', actionValue);
            this.monsterAttack();
        },
        monsterAttack() {
            const actionValue = getRandomValue(15, 8);
            this.playerHealth -= actionValue;
            if (this.playerHealth < 0) this.playerHealth = 0
            this.addLogMessage('MONSTER', 'attack', actionValue);
        },
        specialAttack() {
            this.curretnRound++;
            const actionValue = getRandomValue(12, 5);
            this.monsterHealth -= actionValue;
            if (this.monsterHealth < 0) this.monsterHealth = 0
            this.addLogMessage('PLAYER', 'attack', actionValue);
            this.monsterAttack();
        },
        heal() {
            this.curretnRound++;
            actionValue = getRandomValue(20, 15);
            this.playerHealth += actionValue;
            if (this.playerHealth > 100) this.playerHealth = 100;
            this.addLogMessage('PLAYER', 'heal', actionValue);
            this.monsterAttack();
        },
        surrender() {
            this.winner = "MONSTER";
        },
        newGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.curretnRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        addLogMessage(character, action, value) {
            this.logMessages.unshift({
                character: character,
                action: action,
                value: value
            });
        }
    }
});

app.mount('#game');