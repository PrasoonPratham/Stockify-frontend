<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import { onMount } from 'svelte'
  	import { themeChange } from 'theme-change'

	onMount(() => {
    	themeChange(false)
  	})
</script>

<Nav />
<slot />
