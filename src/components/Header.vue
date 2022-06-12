<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/images/Logo.svg" alt="logo" />
    </div>
    <nav class="header__menu">
      <router-link class="header__menu-link" :to="{ name: 'TasksList' }"
        >Задачи</router-link
      >
      <router-link class="header__menu-link" :to="{ name: 'UsersList' }"
        >Пользователи
      </router-link>
    </nav>
    <div class="header__user"></div>
  </div>
</template>

<style lang='scss' scoped>
.header {
  display: flex;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: #fff;
  box-shadow: 0px 4px 4px #b5b5b5;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  &__logo {
    width: 120px;
    height: 20px;
    margin: 20px;
  }

  &__user {
    width: 120px;
  }

  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #333333;
      margin: 0 5px;
      height: 55px;
      font-size: 24px;
      line-height: 33px;

      &:hover {
        color: #7b61ff;
      }
    }

    &-active {
      margin-bottom: -2px;
      border-bottom: 2px solid #7b61ff;
    }
  }
}
</style>