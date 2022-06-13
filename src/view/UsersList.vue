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
            v-for="user in users.data"
            :key="user.id"
            :userData="usersList[user.id]"
          />
        </div>
        <div v-else>Нет пользователей!</div>
      </div>
      <Pagination />
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
    ...mapGetters("users", ["users", "usersList", "usersFilter"]),
  },
  mounted() {
    this.fetchUsers();
    this.fetchUsersFilter({
      filter: {},
      page: 0,
      limit: 10,
    });
  },

  methods: {
    ...mapActions("users", [
      "fetchUsers",
      "fetchUsersFilter",
      "setFilterUsers",
    ]),
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
