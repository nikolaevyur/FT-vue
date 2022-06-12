<template>
  <Board>
    <div class="notfound">
    <p class="notfound__title">Здесь ничего нет :(</p>
    <router-link :to="{ name: 'TasksList' }" >
      <div class="notfound__link">На главную</div>
    </router-link>
  </div>
  </Board>
</template>

<style lang='scss'scoped>
  .notfound {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__title{
      font-size: 24px;
    }
    &__link {
      font-size: 20px;
    }
  }
</style>