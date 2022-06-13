<template>
  <div class="pagination">
    <button
      class="pagination__button"
      v-for="num in pages"
      @click="numOfPage(num)"
      :key="num"
    >
      {{ num }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      count: 0,
      path: this.$route.path,
    };
  },

  computed: {
    ...mapGetters("users", ["users", "usersList", "usersFilter"]),
    ...mapGetters("tasks", ["loading", "tasks", "filter"]),

    pages() {
      if (this.path === "/tasks") {
        return Math.ceil(this.tasks.total / this.filter.limit);
      }
      if (this.path === "/users") {
        return Math.ceil(this.users.total / this.filter.limit);
      }
    },
  },

  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
    ...mapActions("users", [
      "setLoading",
      "fetchUsers",
      "fetchUsersFilter",
      "setFilterUsers",
    ]),

    numOfPage(num) {
      if (this.path === "/tasks") {
        this.count = num - 1;
        this.setFilter({
          filter: this.filter.filter,
          page: this.count,
          limit: 10,
        });
        this.fetchTasks(this.filter);
      }
      if (this.path === "/users") {
        this.count = num - 1;
        this.setFilterUsers({
          filter: this.usersFilter.filter,
          page: this.count,
          limit: 10,
        });
        this.fetchUsersFiler(this.usersFilter);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  column-gap: 3px;
  &__button {
    background-color: #e1e1e1;
    border: 1px solid #333333;
    border-radius: 5px;
  }
  &__button:hover {
    background-color: #8a73ff;
  }
}
</style>