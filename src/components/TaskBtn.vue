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
  width: 200px;
}

.medium {
  color: #e9b500;
  width: 200px;
}

.high {
  color: #d14343;
  width: 200px;
}

.opened {
  background-color: #cccccc;
  height: 100%;
  width: 120px;
  border: 1px solid #333333;
  border-radius: 5px;
}

.inProgress {
  background-color: #ffc700;
  height: 100%;
  width: 120px;
  border: 1px solid #333333;
  border-radius: 5px;
}

.testing {
  background-color: #ffc700;
  height: 100%;
  width: 120px;
  border: 1px solid #333333;
  border-radius: 5px;
}

.complete {
  background-color: #4bd379;
  height: 100%;
  width: 120px;
  border: 1px solid #333333;
  border-radius: 5px;
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