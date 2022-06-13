<template>
  <div>
    <Title>
      <div class="title__text">
        {{ currentTask.title }}
        <TaskBtn
          class="title__status"
          :class="currentTask.status"
          :taskBtn="currentTask.status"
        />
      </div>
    </Title>
    <Board>
      <div class="info">
        <div class="first-column">
          <div class="first-column__info-task">
            <p class="column-title">Исполнитель</p>
            {{ usersList[currentTask.assignedId] }}
          </div>
          <div class="first-column__info-task">
            <p class="column-title">Автор задачи</p>
            {{ usersList[currentTask.userId] }}
          </div>
          <div class="first-column__info-task">
            <p class="column-title">Тип запроса</p>
            {{ currentTask.type === "bug" ? "Ошибка" : "Задача" }}
          </div>
          <div class="first-column__info-task">
            <p class="column-title">Приоритет</p>
            {{ ranks[currentTask.rank] }}
          </div>
          <div class="first-column__info-task">
            <p class="column-title">Дата создания</p>
            {{ dateOfCreation }}
          </div>
          <div class="first-column__info-task">
            <p class="column-title">Дата изменения</p>
            {{ dateOfUpdate }}
          </div>
          <div class="first-column__info-task">
            <p class="column-title">Затрачено времени</p>
            {{ hours + " " + "часов" + " " + minutes + " " + "минут" }}
          </div>
          <Button :btn_primary="true" class="btn btn-primary"
            >Сделать запись о работе</Button
          >
        </div>
        <div class="second-column">
          <div class="second-column__description">
            <p class="column-title">Описание</p>
            {{ currentTask.description }}
          </div>
        </div>
        <div class="third-column"></div>
      </div>
    </Board>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { types, ranks, statuses } from "../const/const";
import moment from "moment";

export default {
  data() {
    return {
      types: types,
      ranks: ranks,
      statuses: statuses,
    };
  },

  computed: {
    ...mapGetters("tasks", ["loading", "tasks", "filter", "currentTask"]),
    ...mapGetters("users", ["users", "usersList"]),
    dateOfUpdate() {
      return moment(this.currentTask.dateOfUpdate).format("DD.MM.YY HH:mm");
    },
    dateOfCreation() {
      return moment(this.currentTask.dateOfCreation).format("DD.MM.YY HH:mm");
    },
    hours() {
      return Math.trunc(this.currentTask.timeInMinutes / 60);
    },
    minutes() {
      return this.currentTask.timeInMinutes % 60;
    },
  },
  mounted() {
    this.getTask(this.$route.params.id);
    this.fetchUsers();
  },

  methods: {
    ...mapActions("tasks", [
      "setLoading",
      "fetchTasks",
      "setFilter",
      "getTask",
    ]),
    ...mapActions("users", ["fetchUsers"]),
  },
};
</script>

<style lang='scss' scoped>
.info {
  display: flex;
  height: 640px;
  column-gap: 20px;
  width: 100%;
}

.first-column {
  width: 26%;
  border-right: 1px solid #b5b5b5;
}

.second-column {
  width: 33%;
  border-right: 1px solid #b5b5b5;

  &__description {
    overflow: auto;
    height: 602px;
  }
}

.third-column {
  width: 41%;
  overflow: auto;
}

.column-title {
  color: #cccccc;
}
</style>