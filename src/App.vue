<template>
	<div class="app" :id="app1" @click="onClick">
		<!-- <TestComp1 placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput"/>
		<TestComp2 placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput"/>
		<component :is="componentName" placeholder="test1" :param1="counter" :param2="arr" :param3="obj" :text="app1" v-model="app1" @input="onInput" /> -->
		<DropdownButton  style="width: 200px;" >
			<div class="dropdown-menu-item">
				1
			</div>
			<div class="dropdown-menu-item">
				2
			</div>
			<div class="dropdown-menu-item">
				3
			</div>
		</DropdownButton>
		<DropdownButton  style="width: 200px;" >
			<template #default="aaaa">
				<div class="dropdown-menu-item">
					4 {{ aaaa.isActive}}
				</div>
				<div class="dropdown-menu-item">
					5
				</div>
			</template>
			
		</DropdownButton>

		<Button @click="goToView"></Button>
		<Button @click="goBack">goBack</Button>
		<Button @click="onAlertClick">Alert</Button>

		<Button @click="onObjClick">{{obj1.aa}}{{cc}}</Button>
		<Button @click="onArrClick">Change Arr</Button>


		<router-link :to="link1">red</router-link>
		<router-link :to="link2">green</router-link>
		<router-view :key="$route.fullPath"></router-view>

		<div v-for="item in arr" :key="item">
			{{item}}
		</div>

		<div v-text="alert" ref="aaaa" />
		 <transition name="fade">
			<p v-if="show">привет</p>
		</transition>

		{{ loading }}
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { setTimeout } from 'timers';

export default {
	data() {
		return {
			alert: 'Hello <br/>word',
			app1: 'my-app',
			counter: 0,
			arr: [1, 2, 3, 4],
			obj: {
				text: 'dddd'
			},
			status: ['NEW', 'IN_PROGRESS', "COMPLETED"],

			link1: {
				name: 'ListView1',
				params: {
					color: 'red'
				}
			},
			link2: {
				name: 'ListView1',
				params: {
					color: 'green'
				}
			},
			obj1: {
				aa: 1
			},
			show: false
		}
	},
	watch: {
		$route(val) {
			//console.log(val)
		}
	},

	
	computed: {
		...mapGetters(['loading']),
		sfdsfdsf() {
			return 11
		},
		text() {
			return 'Current date' + new Date().toISOString() + '; count: ' + this.counter
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
		},
		componentName() {
			return 'TestComp' + this.counter
		},
		cc() {
			return this.obj1.bb ? this.obj1.bb.cc : null
		}
		
	},
	mounted() {
		// this.setLoading(true);
		// this.$api.Events.getEvents()
		// .then((data) => {
		// 	setTimeout( () => {
		// 		this.setLoading(false);
		// 	}, 5000)
		// 	console.log(data);
		// })
		this.fetchEvents()
		// this.$router.push({
		// 		name: 'ListView1',
		// 		params: {
		// 			color: 'green'
		// 		}
		// 	})
	},
	methods: {
		...mapActions(['setLoading', 'fetchEvents']),
		getDate() {
			return new Date()
		},
		onClick(e) {
			this.counter+=1;
		},
		updateText(val) {
			this.app1 = val
		},
		onInput(e) {
			console.log(e)
		},
		goToView() {
			this.$router.replace({
				name: "SubListView"
			})
		},
		goBack() {
			this.$router.go(-1);
		},
		onAlertClick() {
			this.$message('heloo')
		},
		onObjClick() {
			this.obj1.aa++;
			//this.obj1.bb = this.obj1.bb ? this.obj1.bb + 1 : 1
			// Object.assign(this.obj1, { bb: { cc: 'cc' } })
			this.$set(this.obj1, 'bb', { cc: 'cc' } );
		},
		onArrClick() {
			this.arr[0]++
			this.alert = 'dsfdsfdsf'
			this.show = true
			// this.$message(this.$refs.aaaa.innerHTML)
			// this.$nextTick(() => {
			// 	this.$message(this.$refs.aaaa.innerHTML)
			// })
			// this.$set(this.arr, 0, this.arr[0] + 1 );
			// this.arr.push(this.arr[0] + 10 )
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '@/scss/fonts';
	.app {
		font-family: 'Roboto', Verdana;
		//background: pink;
		box-sizing: border-box;

		/deep/ * {
			box-sizing: border-box;
		}
	}

	.app2 {
		background: green;
	}

	.fade-enter-active, .fade-leave-active {
	transition: opacity 3.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
	opacity: 0;
	}
</style>
