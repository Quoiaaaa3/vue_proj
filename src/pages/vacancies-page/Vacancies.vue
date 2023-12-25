<template>
    <div class="container">
      <h2>Ищешь где бы проявить себя?</h2>
      <h3>Мы предлагаем тебе отличную возможность напрямую поучаствовать в жизни сервера</h3>
      <h4 :style="{fontSize: '20px'}">Прямо сейчас на сервере проходит набор ивентеров!</h4>
      <h4 :style="{fontSize: '16px'}">Требования:</h4>
      <div :style="{
        display: 'flex',
        justifyContent: 'center'
      }">
        <ul :style="{width: '550px', textAlign: 'left'}">
          <li v-for="(req) in reqs"
          :key="req"
          >
            <span>{{ req.text }}</span>
          </li>
        </ul>
      </div>
      <div :style="{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
      }">
        <Form/>
      </div>
    </div>
  </template>
<script>

import Form from '../../../src/components/Form.vue'

export default {
  components: {
    Form
  },
  data () {
    return {
      reqs: [
        { id: 1, text: 'Минимальный возраст 15 лет ~' },
        { id: 2, text: 'Стрессоустойчивость и желание помогать проекту ~' },
        { id: 3, text: 'Умение и желание работать в команде ~' },
        { id: 4, text: 'Хороший микрофон и достаточное количество свободного времени ~' }
      ]
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: calc(94vh - 27px);
    text-align: center;
    justify-content: center;
  }

  h2{
    font-size: xx-large;
    line-height: normal;
  }

  h3{
    font-size: x-large;
    line-height: normal;
  }
</style>
