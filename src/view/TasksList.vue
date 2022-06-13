<template>
  <div>
    <Title>
      <div class="title__text">Задачи</div>
      <div class="title__buttons">
        <router-link :to="{ name: 'TaskAddEdit' }">
          <Button :btn_primary="true"> Добавить задачу </Button>
        </router-link>
      </div>
    </Title>
    <Board>
      <Filters />
      <div v-if="loading">loading...</div>
      <div v-else>
        <div class="task-wrapper" v-if="tasks.data">
          <Task v-for="task in tasks.data" :key="task.id" :taskData="task" />
        </div>
        <div v-else>Нет задач!</div>
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
    ...mapGetters("tasks", ["loading", "tasks", "filter"]),
    ...mapGetters("users", ["users", "usersList"]),
  },
  mounted() {
    this.setFilter({
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
}
</style>
