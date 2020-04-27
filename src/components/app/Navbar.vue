<template>
	<nav class="navbar orange lighten-1">
		<div class="nav-wrapper">
			<div class="navbar-left">
				<a href="#" @click.prevent="$emit('sideBarClose')">
					<i class="material-icons black-text">dehaze</i>
				</a>
				<span class="black-text">{{date | date('datetime')}}</span>
			</div>

			<ul class="right hide-on-small-and-down">
				<li>
					<a
							class="dropdown-trigger black-text"
							data-target="dropdown"
							href="#"
							ref="dropdown"
					>
						USER NAME
						<i class="material-icons right">arrow_drop_down</i>
					</a>

					<ul class='dropdown-content' id='dropdown'>
						<li>
							<router-link class="black-text" to="/profile">
								<i class="material-icons">account_circle</i>Профиль
							</router-link>
						</li>
						<li class="divider" tabindex="-1"></li>
						<li>
							<a class="black-text" href="#" @click.prevent="logout">
								<i class="material-icons">assignment_return</i>Выйти
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {
	    data:() => ({
					date: new Date(),
			    interval: null,
			    dropdown: null,
			}),
	    methods: {
	      logout() {
	          console.log('logout');
	          this.$router.push('/login?massage=logout')
	      }
	    },
	    mounted() {
	        this.interval = setInterval(()=> {
	            this.date = new Date()
	        })
	      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
	          constrainWidth: false
	      })
      },
			beforeDestroy() {
	        clearInterval(this.interval)
					if (this.dropdown && this.dropdown.destroy) {
					    this.dropdown.destroy();
					}
      }
  }
</script>

<style scoped>

</style>