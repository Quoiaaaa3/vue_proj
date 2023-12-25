<template>
    <div class="container">
      <h2> Готов вступить? </h2>
      <h3> Убедись, что ты согласен с правилами и соответствуешь <a href="https://discord.com/terms" target="_blank">ToS</a> и <a href="https://discord.com/guidelines" target="_blank">Guidelines</a>! </h3>
      <div class="text_rules">
        <h4 :style="{fontSize: '20px'}"> В текстовых каналах запрещено следующее: </h4>
        <ul class="rules-list">
          <li v-for="(rule) in text_rules"
          :key="rule"
          >
            <span class="id">{{ rule.id }} <wbr></span>
            <span>{{ rule.text }}</span>
          </li>
        </ul>
      </div>

      <div class="voice_rules" :style="{marginTop: '280px'}">
        <h4 :style="{fontSize: '20px'}"> В голосовых каналах запрещено следующее: </h4>
        <ul class="rules-list" :style="{width: '660px'}">
          <li v-for="(rule) in voice_rules"
          :key="rule"
          >
            <span class="id">{{ rule.id }} <wbr></span>
            <span>{{ rule.text }}</span>
          </li>
        </ul>
      </div>

      <div :style="{
        display: 'flex',
        justifyContent: 'center'
      }">
        <a class="button" target="_blank" href="">ВСТУПИТЬ НА ЦИНДОКУ</a>
      </div>

    </div>
  </template>
<script>

export default {
  data(){
    return{
      text_rules:[
        {id: '1.0>', text: "Мат в общем чате"},
        {id: '1.1>', text: "Оскорбления / провокации / неадекватное и аморальное поведение / бессмысленные пинги"},
        {id: '1.2>', text: "Религиозные / политические / национальные конфликты"},
        {id: '1.3>', text: "Флуд / капс / оффтоп / дробление сообщений (меньше двух слов в сообщении) / транслитерация (privet vsem)"},
        {id: '1.4>', text: "Пропаганда суицида / нанесения увечий"},
        {id: '1.5>', text: "Публикация шокирующего контента"},
        {id: '1.6>', text: "Реклама / спам"},
        {id: '1.7>', text: "РП в основном чате"},
        {id: '1.8>', text: "Намеренное нарушение правил простейшей грамматики"},
        {id: '1.9>', text: "Чрезмерно большие сообщения в общем чате ( > 20 строчек)"},
        {id: '2.0>', text: "Деанон участников сервера без их собственного согласия  "}
      ],
      voice_rules:[
        {id: '2.1>', text: "Оскорбления / провокации / неадекватное поведение / троллинг / агрессия"}, 
        {id: '2.2>', text: "Религиозные / политические / национальные конфликты"},
        {id: '2.3>', text: "Soundpad"},
        {id: '2.4>', text: "Транслирование музыки в микрофон без согласия остальных участников голосовогоканала"},
        {id: '2.5>', text: "Крики / посторонние шумы"},
        {id: '2.6>', text: "Изменение голоса при помощи стороннего ПО"}
      ]
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    height: 94vh;
    text-align: center;
    display: grid;
    grid-template-rows: repeat(6, 70px);
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

  a{
    cursor: pointer;
    text-decoration: none;
    color: rgb(149, 149, 241);
  }

  .id{
    font-weight: bold;
  }
  .rules-list{
    max-width: 860px;
    display: grid;
    justify-content: center;
    text-align: left;
  }

  .button{
    margin-top: 500px;
    border: 2px solid rgb(0, 0, 0, .3);
    border-radius: 25px;
    padding: 25px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    cursor: pointer;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: rgb(255, 154, 170, 0.7);
    box-shadow: 0 5px 15px 0 rgba(255, 105, 130, 0.7);
    transition: 0.5s;
  }

  .button:hover{
    transform: translate(0,-3px);
    box-shadow: 0 10px 25px 0 rgba(255, 105, 130, 0.7);
  }
</style>
