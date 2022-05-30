<template>
    <div>
        <input :value="value" v-bind="$attrs" v-on="listeners" />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    data() {
        return {
            // storeText: ''
        }
    },
    props: {
        value: String
    },
    computed: {
        listeners() {
                var vm = this
            // `Object.assign` объединяет объекты вместе, чтобы получить новый объект
            return Object.assign({},
                // Мы добавляем все слушатели из родителя
                this.$listeners,
                // Затем мы можем добавить собственные слушатели или
                // перезаписать поведение некоторых существующих.
                {
                // Это обеспечит, что будет работать v-model на компоненте
                input: function (event) {
                    vm.$emit('input', event.target.value)
                }
            }
            )
        }
    },
    // watch: {
    //     storeText(val) {
    //         this.$emit('input', val)
    //     }
    // },
    // mounted() {
    //     this.storeText = this.value
    // },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

