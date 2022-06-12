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
import Button from "./Button.vue";

export default {
  components: { Button },
  data() {
    return { count: 0 };
  },

  computed: {
    ...mapGetters("users", ["users", "usersList", "usersFilter"]),
    ...mapGetters("tasks", ["loading", "tasks", "filter"]),

    pages() {
      return Math.ceil(this.tasks.total / this.filter.limit);
    },
  },

  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
    ...mapActions("users", ["fetchUsers", "fetchUsersFilter"]),

    numOfPage(num) {
      this.count = num - 1;
      this.setFilter({
        filter: this.filter.filter,
        page: this.count,
        limit: 10,
      });
      this.fetchTasks(this.filter);
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