<template>
    <div class="container">

      <div class="container__buttons right">
        <router-link class="button" to="/">Главная</router-link>
        <router-link class="button" to="/community">Комьюнити</router-link>
        <router-link class="button" to="/history">История</router-link>
      </div>

      <div class="container__buttons left">
        <router-link class="button" to="/join">Вступить</router-link>
        <router-link class="button" to="/vacancies">Вакансии</router-link>
      </div>

    </div>
  </template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

  <style scoped lang="scss" src="./styles.scss"></style>
