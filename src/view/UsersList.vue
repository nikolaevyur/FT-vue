<template>
  <div>
    <Title>
      <div class="title__text">Пользователи</div>
    </Title>
    <Board>
      <div v-if="loading">loading...</div>
      <div v-else>
        <div class="user-wrapper" v-if="usersList">
          <User
            v-for="(user, index) in usersList"
            :key="index"
            :userData="user"
          />
        </div>
        <div v-else>Нет пользователей!</div>
      </div>
    </Board>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      page: 0,
    };
  },

  computed: {
    ...mapGetters("users", ["users", "usersList"]),
  },
  mounted() {
    this.fetchUsers();
  },

  methods: {
    ...mapActions("users", ["fetchUsers"]),
  },
};
</script>

<style lang="scss" scoped>
.user-wrapper {
  box-shadow: inset 0px 0px 2px 1px #b5b5b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  width: 1200px;
  height: 560px;
  overflow: hidden;
}
</style>
