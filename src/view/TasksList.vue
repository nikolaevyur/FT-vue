<template>
  <Board>
    <Filters />
    <div v-if="loading">loading...</div>
    <div v-else>
      <div class="task-wrapper" v-if="tasks.data">
        <Task v-for="task in tasks.data" :key="task.id" :taskData="task" />
      </div>
      <div v-else>Нет задач!</div>
    </div>
  </Board>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Filter from '../components/Filters.vue';

export default {
  components: { Filter },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("tasks", ["loading", "tasks", "filter"]),
    ...mapGetters("users", ["users", "usersList"]),
  },

  watch: {},

  mounted() {
    this.fetchTasks({
      filter: {},
      page: 0,
      limit: 10,
    });
    this.fetchUsers();
  },

  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
    ...mapActions("users", ["fetchUsers"]),
  },
};
</script>

<style lang="scss" scoped>
.task-wrapper {
  box-shadow: inset 0px 0px 2px 1px #b5b5b5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
  width: 100%;
  height: 560px;
  margin-top: 40px;
}
</style>
