<template>
    <div class="container">
        <v-carousel
            :carousel_data="slidersList"
        />
    </div>
</template>

<script>

import vCarousel from '../../components/v-carousel.vue'

export default {
  components: {
    vCarousel
  },

  data () {
    return {
      slidersList: [
        { id: 1, img: 'https://imgur.com/TGoJCKb.png' },
        { id: 2, img: 'https://imgur.com/Ob3equu.png' },
        { id: 3, img: 'https://imgur.com/WRpeXGX.png' },
        { id: 4, img: 'https://imgur.com/UiTDHYp.png' }
      ]
    }
  }
}
</script>

<style scoped>
    .container{
        height: 94vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
