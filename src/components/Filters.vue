<template>
  <form class="filters" @submit.prevent="submit">
    <DropdownBtn text="Тип" class="filters__type input">
      <Checkbox
        v-for="(item, index) in types"
        :key="index"
        :index="index"
        :item="item"
        v-model="form.type"
      ></Checkbox>
    </DropdownBtn>
    <Input class="filters__input" v-model="form.query" placeholder="Задача" />
    <DropdownBtn text="Пользователь" class="filters__user input">
      <Checkbox
        v-for="(item, index) in usersList"
        :key="index"
        :index="index"
        :item="item"
        v-model="form.assignedUsers"
      ></Checkbox>
    </DropdownBtn>
    <DropdownBtn text="Приоритет" class="filters__rank input">
      <Checkbox
        v-for="(item, index) in statuses"
        :key="index"
        :index="index"
        :item="item"
        v-model="form.status"
      >
      </Checkbox>
    </DropdownBtn>
    <DropdownBtn text="Статус" class="filters__status input">
      <Checkbox
        v-for="(item, index) in ranks"
        :key="index"
        :index="index"
        :item="item"
        v-model="form.rank"
      >
      </Checkbox>
    </DropdownBtn>

    <Button
      :btn_primary="true"
      class="btn"
      type="submit"
    >Применить</Button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { types, ranks, statuses } from "../const/const";

export default {
  data() {
    return {
      types: types,
      ranks: ranks,
      statuses: statuses,
      form: {
        type: [],
        query: "",
        assignedUsers: [],
        status: [],
        rank: [],
      },
    };
  },
  computed: {
    ...mapGetters("users", ["users", "usersList"]),
    ...mapGetters("tasks", ["filter"]),
  },
  methods: {
    ...mapActions("tasks", ["setLoading", "fetchTasks", "setFilter"]),
    submit() {
      this.setFilter({
        filter: this.form,
        page: 0,
        limit: 10,
      });
      this.fetchTasks(this.filter);
    },
  },
};
</script>

<style lang='scss' scoped>
.filters {
  display: flex;
  width: 100%;
  column-gap: 15px;
  padding-left: 30px;

  &__type {
    width: 98px;
  }

  &__rank {
    width: 160px;
  }

  &__status {
    width: 140px;
  }

  &__user {
    width: 160px;
  }

  &__input {
    width: 450px;
  }
}

.select-user__input {
  width: 180px;
}
</style>