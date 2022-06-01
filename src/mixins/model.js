export const Model = {
    data() {
        return {
            dd: 111
        }
    },
    props: {
        value: String,
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                console.log(val)
                this.$emit('input', val)
            }
        }
    },
    created() {
        console.log('comp1')
    }
}