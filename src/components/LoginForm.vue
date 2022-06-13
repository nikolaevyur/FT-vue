<template>
  <div class="login">
    <h1 class="login__title">Авторизация</h1>
    <form @submit.prevent="submit">
      <label>
        <p class="login__title-input">Логин</p>
        <Input v-model="form.login" placeholder="Логин" />
      </label>
      <label>
        <p class="login__title-input">Пароль</p>
        <Input v-model="form.password" placeholder="Пароль" />
      </label>
      <div>
        <Button
          :btn_success="true"
          class="btn login__btn"
          type="submit"
        >Вход</Button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters("users", ["users", "usersList", "loginUser"]),
  },
  methods: {
    ...mapActions("users", ["login"]),
    submit() {
      this.login(this.form).then(() => {
        this.$router.push({ name: "TasksList" });
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 300px;
  height: 288px;
  left: calc(50% - 300px / 2);
  top: calc(50% - 288px / 2);

  background: #fff;
  box-shadow: 0px 0px 5px 3px #b5b5b5;
  border-radius: 5px;

  &__title {
    margin-top: 30px;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
  }

  &__title-input {
    width: 240px;
    height: 19px;
    margin-bottom: 5px;
    color: #cccccc;
  }

  &__input {
    width: 240px;
    height: 19px;
    width: 240px;
    height: 24px;
    left: 0px;
    top: 24px;
  }

  &__btn {
    width: 240px;
    height: 24px;
    margin-top: 30px;
  }
}
</style>