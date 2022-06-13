<template>
  <Board>
    <div class="task__form">
      <div class="column__first">
        <label className="column-title">Исполнитель</label>
        <Select
          class="column__first-select"
          :obj="usersList"
          v-model="formTask.assignedId"
          >Исполнитель</Select
        >
        <label className="column-title">Тип</label>
        <Select
          class="column__first-select"
          :obj="types"
          v-model="formTask.type"
          >Тип</Select
        >
        <label className="column-title">Приоритет</label>
        <Select
          class="column__first-select"
          :obj="ranks"
          v-model="formTask.rank"
          >Приоритет</Select
        >
      </div>
      <div class="column__second">
        <label className="column-title">Название</label>
        <Input
          class="column__second-input"
          v-model="formTask.title"
          placeholder="Название задачи"
        />
        <label className="column-title">Описание</label>
        <Textarea
          v-model="formTask.description"
          class="column__second-textarea"
        />
      </div>
    </div>
  </Board>
</template>

<script>
import { types, ranks, statuses } from "../const/const";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
      types: types,
      ranks: ranks,
      statuses: statuses,
      formTask: {
        userId: localStorage.getItem("loginUser"),
        assignedId: "",
        title: "",
        description: "",
        type: "",
        rank: "",
      },
    };
  },

  computed: {
    ...mapGetters("tasks", ["currentTask"]),
    ...mapGetters("users", ["usersList"]),
  },

  mounted() {
    this.fetchUsers();
    if (this.id) {
      this.getTask(this.id);
    }
  },

  methods: {
    ...mapActions("users", ["fetchUsers"]),
        ...mapActions("tasks", ["getTask"]),
  },

  watch: {
    currentTask() {
      this.formTask = this.currentTask;
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  &__form {
    display: flex;
    justify-content: start;
    align-self: flex-start;
    height: 100%;

    .column {
      &__first {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 0 20px;

        &-select {
          padding: 2px;
          height: 25px;
          margin: 5px 0 20px 0;
        }
      }
    }

    .column__second {
      width: 400px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      border-left: #b5b5b5 solid 2px;

      &-input {
        height: 24px;
        padding: 5px;
        margin: 0 0 20px 0;
        resize: none;
      }

      &-textarea {
        height: 100%;
        width: 96%;
      }

      fieldset {
        border: none;
        padding: 0;
      }

      .column__description {
        height: 85%;
      }

      .column__input--title {
        height: 16px;
      }
    }
  }
}
</style>