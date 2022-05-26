<template>
	<div class="app" :class="['app3', {'app2': class2}]" :style="style">
		<div v-for="item in param2" :key="item">
			{{ item }}
		</div>
		<div>
			{{ text }}
		</div>
		<input type="text" :value="ssss" v-bind="attributes" v-on="listeners1" />
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	data() {
		return {
			counter: 0,
			text: ''
		}
	},
	model: {
		prop: 'ssss',
		event: 'onUpdate'
	},
	props: {
		'param1': {
			type: Number,
			required: true
		},
		'param2': {
			type: Array,
			default: () => [1, 2]
		},
		'param3': {
			type: Object,
			default: () => ({
				text: 'qqq'
			})
		},
		ssss: String
	},
	watch: {
		param1(val) {
			this.counter = this.multiply(val)
		},
		text(val) {
			this.$emit('onUpdate', this.text)
			this.$emit('click', this.text)
		},
		ssss(val) {
			this.text = val
		}
	},
	
	computed: {
		attributes() {
			return {
				...this.$attrs, 
				...this.$props
			}
		},
		listeners1() {
			return this.$listeners
		},
		text2() {
			return 'Hello ' + this.text
		},
		class2() {
			return this.counter > 2
		},
		style() {
			return {
				'border': '1px solid red',
				backgroundColor: 'yellow'
			}
		}
	},
	mounted() {
		// this.param1 = 77
		// this.param2.push(31)
		this.text = this.param3.text
		this.counter = this.multiply(this.param1)
	},
	methods: {
		onInput(event) {
			console.log(event);
			//this.text = value
		},
		multiply(val) {
			return val + 2
		},
		getDate() {
			return new Date()
		},
		onClick(e) {
			this.counter+=1;
		}
	},
}
</script>

<style lang="scss" scoped>
	.app {
		background: pink;
		box-sizing: border-box;

		/deep/ * {
			box-sizing: border-box;
		}
	}

	.app2 {
		background: green;
	}
</style>
