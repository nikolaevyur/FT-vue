<template>
  <div class="task-btn">
    <div class="rank" :class="className"></div>
    {{ taskStatuses[taskBtn] }}
  </div>
</template>

<script>
export default {
  data() {
    const taskStatuses = {
      opened: "Открыто",
      inProgress: "В работе",
      testing: "Тестирование",
      complete: "Сделано",

      low: "Низкий",
      medium: "Средний",
      high: "Высокий",
    };

    return {
      taskStatuses: taskStatuses,
    };
  },

  props: {
    taskBtn: {
      type: String,
    },
  },
  computed: {
    className() {
      return {
        "rank-low": this.taskBtn === "low",
        "rank-medium": this.taskBtn === "medium",
        "rank-high": this.taskBtn === "high",
      };
    },
  },
};
</script>

<style lang='scss' scoped>
.task-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.low {
  color: #3ca961;
}

.medium {
  color: #e9b500;
}

.high {
  color: #d14343;
}

.opened {
  background-color: #cccccc;
}

.inProgress {
  background-color: #ffc700;
}

.testing {
  background-color: #ffc700;
}

.complete {
  background-color: #4bd379;
}

.rank {
  width: 14px;
  height: 8px;

  &-low {
    background-image: url("../assets/images/low.svg");
  }

  &-medium {
    background-image: url("../assets/images/medium.svg");
    height: 6px;
  }

  &-high {
    background-image: url("../assets/images/high.svg");
  }
}
</style>