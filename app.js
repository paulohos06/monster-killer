new Vue({
  el: '#app',
  data: {
    playerLife: 100,
    monsterLife: 100,
    running: false,
    logs: []
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
      this.logs = []
    },
    giveUpGame() {
      this.running = !this.running
      this.playerLife = 0
    },
    attack(special) {
      this.hurt('monsterLife', 5, 10, special, 'Jogador', 'Monstro', 'player')
      if (this.monsterLife > 0) {
        this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
      }
    },
    hurt(warrior, min, max, specialAttack, source, target, cls) {
      const plus = specialAttack ? 7 : 0
      const hurt = this.getRandom((min + plus), (max + plus))
      this[warrior] = Math.max(this[warrior] - hurt, 0)
      this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
    },
    healAndHurt() {
      this.heal(10, 15)
      this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
    },
    heal(min, max) {
      const heal = this.getRandom(min, max)
      this.playerLife = Math.min(this.playerLife + heal, 100)
      this.registerLog(`Jogador ganhou força de ${heal}.`, 'player-heal')
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },
    registerLog(text, style) {
      this.logs.unshift({ text, style })
    }
  },
  watch: {
    hasResult(life) {
      if (life) this.running = false
    }
  }
})