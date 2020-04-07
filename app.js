new Vue({
  el: '#app',
  data: {
    playerLife: 100,
    monsterLife: 100,
    running: false
  },
  computed: {
    hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0
    }
  },
  methods: {
    startGame() {
      this.running = !this.running
      this.playerLife = 100
      this.monsterLife = 100
    },
    giveUpGame() {
      this.running = !this.running
      this.playerLife = 0
    }
  },
  watch: {
    
  }
})