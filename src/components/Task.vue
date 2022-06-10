<template>
      <div class='task'>
      <div class='task__name'>
        {{taskData.title}}
      </div>
      <div class='task__user'>{{ usersList[taskData.assignedId] }}</div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    taskData: Object,
  },

  computed: {
    ...mapGetters('users', ['users', 'usersList']),
  },

    methods: {
    ...mapActions('users', ['fetchUsers']),
}
}
</script>

<style lang='scss' scoped>

.task:nth-child(2n) {
  background-color: #F2F2F2;
}

.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
  height: 2.8%;

  &__name {
    width: 527px;
    overflow: hidden;
  }

  &__user {
    width: 180px;
  }
}
</style>
