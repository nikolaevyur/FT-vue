<template>
  <div class="task">
    <div class="task__type">
      <img
        v-if="taskData.type === 'bug'"
        src="../assets/images/typeBug.svg"
        alt="Bug"
      />
      <img v-else src="../assets/images/typeTask.svg" alt="Task" />
    </div>
    <div class="task__name">
      <router-link :to="{ name: 'TaskForm', params: { id: taskData.id } }">
        {{ taskData.title }}
      </router-link>
    </div>
    <div class="task__user">{{ usersList[taskData.assignedId] }}</div>
    <TaskBtn :class="taskData.status" :taskBtn="taskData.status" />
    <TaskBtn :class="taskData.rank" :taskBtn="taskData.rank" />
    <DropdownBtn class="dropdown">
      <template v-slot:inside>
        <img
          src="../assets/images/dropdown-icon.svg"
          alt="burger"
          width="10"
          height="12"
        />
      </template>
      <div class="dropdown-lnk">
        <router-link
          class="dropdown-lnk__list"
          :to="{ name: 'TaskAddEdit', params: { id: taskData.id } }"
          >Редактировать</router-link
        >
      </div>
    </DropdownBtn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  props: {
    taskData: Object,
  },

  computed: {
    ...mapGetters("users", ["users", "usersList"]),
  },

  methods: {
    ...mapActions("users", ["fetchUsers"]),
  },
};
</script>

<style lang="scss" scoped>
.task:nth-child(2n) {
  background-color: #f2f2f2;
}

.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  height: 2.8%;
  column-gap: 10px;

  &__name {
    width: 450px;
    overflow: hidden;
  }

  &__type {
    width: 88px;
  }

  &__user {
    width: 180px;
  }

  .dropdown {
    width: 100px;
    &-lnk {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
}
</style>
