<template>
    <div class="container">
      <div class="container__left">
        <span class="container__title">Cindocu</span>
        <span class="container__slogan">The way of relentless progress</span>
        <span class="container__comment">//слова интерактивные, <br> //если чтоㅤㅤㅤㅤㅤㅤㅤ</span>
        <div class="container__buttons">
          <button
            v-for="(button, index) in shuffledButtons"
            v-on:mouseover="hovered = index"
            :key="index"
            @click="buttonClick(index, button)"
            :class="{ 'container__button--hovered': hovered === index }"
            class="container__button"
            :style="{
              top: `${buttonPositions[index].top}px`,
              left: `${buttonPositions[index].left}px`,
              transition: 'top 0.5s, left 0.5s, color 0.6s, font-size 0.3s ease',
              color: button.color
            }"

          >
            {{ button.name }}
          </button>
        </div>
      </div>
      <div class="container__right">
        <img class="container__right-img" v-bind:src=cindocu draggable="false">
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      cindocu: 'https://imgur.com/Xm2fvdP.gif',
      sorrenth: 'https://imgur.com/fgH3Y0T.jpg',
      buttons: [
        { id: 1, name: 'resident' },
        { id: 2, name: 'shelter' },
        { id: 3, name: 'fluffies' },
        { id: 4, name: 'sanity' },
        { id: 5, name: 'structure' },
        { id: 6, name: 'community' },
        { id: 7, name: 'economy' }
      ],
      buttonPositions: []
    }
  },

  created () {
    this.initializeButtonPositions()
  },

  computed: {
    shuffledButtons () {
      const buttons = this.buttons.slice()

      for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]]
      }
      return buttons
    },

    radialCoords () {
      const buttonCount = this.buttons.length
      const coords = []
      const radius = 430
      const center = { x: 550, y: 300 }

      const angleStep = (2 * Math.PI) / buttonCount

      const indexAdjustments = {
        0: 180,
        2: -120,
        5: 100
      }

      for (let i = 0; i < buttonCount; i++) {
        const angle = i * angleStep
        const top = Math.round(center.y + radius * Math.sin(angle) + (indexAdjustments[i] || 0))
        const left = Math.round(center.x + radius * Math.cos(angle) - 20)
        coords.push({ top, left })
      }
      return coords
    }
  },
  methods: {
    initializeButtonPositions () {
      for (let i = 0; i < this.shuffledButtons.length; i++) {
        this.buttonPositions.push({
          top: this.radialCoords[i].top,
          left: this.radialCoords[i].left
        })
      }
    },

    buttonClick (index, button) {
      const deltaX = Math.random() * 50 - 25
      const deltaY = Math.random() * 50 - 25

      this.buttonPositions[index].top += deltaY
      this.buttonPositions[index].left += deltaX
      this.buttonColorChange(button)
    },

    buttonColorChange (button) {
      const colors = [
        'rgb(255, 245, 238)', // Seashell
        'rgb(255, 240, 245)', // LavenderBlush
        'rgb(250, 235, 215)', // AntiqueWhite
        'rgb(255, 228, 225)', // MistyRose
        'rgb(245, 245, 220)' // Beige
      ]
      button.color = colors[Math.floor(Math.random() * 5)]
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 94vh;
    font-weight: bold;
    user-select: none;
  }

  .container__left{
    display: grid;
    justify-content: center;
    width: 65%;
    text-align: center;
    position: relative;
    padding: 6% 0;
  }

  .container__right-img{
    opacity: 75%;
    margin-right: 150px;
    margin-top: 100px;
    width: 570px;
    height: 570px;
    border-radius: 50%;
    box-shadow: 15px 10px 50px 8px rgba(0, 0, 0, 1);
    transition: 0.3s ease;
  }

  .container__right-img:hover{
    border-radius: 35%;
    transition: 0.3s ease;
  }

  .container__button{
    font-size: 32px;
    font-weight: bold;
    width: 90px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    position: absolute;
    border: none;
    cursor: pointer;
  }

  .container__button--hovered{
    font-weight: bolder;
    font-size: 34px;
  }

  .container__title{
    font-size: 128px;
  }

  .container__slogan{
    font-size: 64px;
    width: 800px;
  }
  .container__comment{
    font-weight: normal;
    font-size: 24px;
    color: rgb(255, 255, 255, 0.3);
    position: absolute;
    top: 80px;
    right: -80px;
    transform: rotate(-33deg);

  }

</style>
