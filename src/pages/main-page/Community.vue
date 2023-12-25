<template>
    <div class="container">
        <div class="container__left">
            <h2>Отзывы</h2>
            <ul class="reviews">
                <li
                 v-for="(review) in reviews"
                 :key="review"
                 >
                    <span class="title">{{ `${review.name}:`}} </span> <br>
                    <span>{{ review.text }} </span>
                </li>
            </ul>
        </div>
        <div class="container__right">
            <h2>Модераторский состав</h2>
            <ul class="staff">
                <li
                 v-for="(moderator) in staff"
                 :key="moderator"
                 :style="{
                    display: 'flex',
                    gap: '20px',
                    lineHeight: '100px',
                    alignItems: 'center',
                    userSelect: 'none'
                 }"
                 >
                    <img :src="moderator.avatar" :key="moderator.id">
                    <span class="title">{{ `${moderator.name} - ${moderator.post}`}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      reviews: [
        { id: 1, name: 'kerfi.', text: 'Сервер хороший, очень комфортно и приятно общаться с людьми на нем. На модерации сидят умные люди. Проводятся разные активности, что тоже является плюсом. Рекомендую всем.' },
        { id: 2, name: 'zhan0153', text: '...Комфортный сервер, комфортные люди.Действительно можно забыться в интернете, пообщаться с людьми в любое время и найти своего человека.' },
        { id: 3, name: 'v0blla', text: 'Уже почти год прошел с момента захода на этот сервер.. Мнение не изменилось, комфортный сервер с приятными людьми.' },
        { id: 4, name: 'watashiwakeehl', text: 'Уже около года сижу на этом уютном сервере. Что мне особенно в нём нравится – здесь нет места токсичности и ругани, администрация справедлива, общительна и внимательна к просьбам участников. Здесь тебя не проигнорируют, ведь разносторонние люди любят поддержать почти любой разговор. Ставлю Циндоку большой класс!' },
        { id: 5, name: 'qwoeixx', text: 'я люблю этот сервер. Тосик солнышко, распространите.' }

      ],

      staff: [
        { id: 1, name: 'peppercats', avatar: 'https://imgur.com/gyz73hz.png', post: 'Создатель' },
        { id: 2, name: 'sadnessyaku', avatar: 'https://imgur.com/PROFW5b.png', post: 'Высший модератор' },
        { id: 4, name: 'Lantovsky#0022', avatar: 'https://imgur.com/5QOab7T.png', post: 'Высший модератор' },
        { id: 3, name: 'samuel_addati', avatar: 'https://imgur.com/Lh2IXGf.png', post: 'Младший модератор' }
      ]
    }
  }
}
</script>

<style scoped>
    .container{
        height: calc(94vh - 50px);
        width: 100vw;
        display: flex;
        gap: 350px;
        padding-top: 50px;
    }

    h2{
        font-size: 32px;
        font-weight: bold;
        color: rgb(255, 154, 170);
        user-select: none;
    }

    .container__left{
        max-width: 600px;
        margin-left: 200px;
    }

    .container__right{
        max-width: 600px;
        margin-right: 200px;
    }

    .reviews{
        margin-top: 80px;
        display: grid;
        row-gap: 20px;
        justify-content: center;
    }

    .staff{
        margin-top: 80px;
        justify-content: center;
    }

    img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid;
        box-shadow: 14px 11px 15px 0px rgba(0, 0, 0, .3);
    }

    .title{
        font-weight: bold;
        font-size: 20px;
    }

    h2{
        text-align: center;
    }

</style>
