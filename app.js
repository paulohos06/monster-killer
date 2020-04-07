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
    },
    attack(special) {
      this.hurt('playerLife', 7, 12, false)
      this.hurt('monsterLife', 5, 10, special)
    },
    hurt(fighter, min, max, flag) {
      const plus = flag ? 7 : 0
      const hurt = this.getRandom((min + plus), (max + plus))
      this[fighter] = Math.max(this[fighter] - hurt, 0)
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    }
  },
  watch: {
    hasResult(life) {
      if (life) this.running = false
    }
  }
})