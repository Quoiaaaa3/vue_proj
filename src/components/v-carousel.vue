<template>
    <div class="wrapper">
        <div class="v-carousel"
                :style="{
                    'margin-left': '-' + (100 * currentSlideIndex + '%')
                }"
                >
            <v-carousel-item
                v-for="item in carousel_data"
                :key="item.id"
                :item_data="item"

            />
        </div>
    </div>

    <button class="button__left" @click="prevSlide"><img :src=arrow></button>
    <button class="button__right" @click="nextSlide"><img :src=arrow></button>

</template>

<script>

import vCarouselItem from './v-carousel-item.vue'

export default {
  name: 'v-carousel',
  components: {
    vCarouselItem
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentSlideIndex: 0,
      arrow: 'https://imgur.com/BuWhtZ0.png'
    }
  },
  methods: {
    prevSlide () {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },

    nextSlide () {
      if (this.currentSlideIndex >= this.carousel_data.length - 1) {
        this.currentSlideIndex = 0
      } else {
        this.currentSlideIndex++
      }
    }
  }
}
</script>

<style scoped>
    .wrapper{
        max-width: 1000px;
        max-height: 600px;
        border: 2px solid;
        overflow: hidden;
    }

    .v-carousel{
        display: flex;
        transition: all ease .5s;
    }

    button{
        border: none;
        cursor: pointer;
        background-color: #242424;
        padding: 10px
    }

    img{
        width: 100px;
        height: 100px;
    }

    .button__left{
        position: absolute;
        top: 40%;
        left: 300px;
        transform: rotate(90deg);
    }

    .button__right{
        position: absolute;
        top: 40%;
        right: 300px;
        transform: rotate(270deg);
    }

</style>
