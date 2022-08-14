<script>
	import '../app.css';
	import Nav from '../components/nav.svelte';
	import { onMount } from 'svelte'
  	import { themeChange } from 'theme-change'
	import { MetaTags, JsonLd } from 'svelte-meta-tags';

	onMount(() => {
    	themeChange(false)
  	})
</script>

<MetaTags
  title="Stockify"
  titleTemplate = '%s | Learn how to invest'
  description="This example uses more of the available config options."
  openGraph={{
    url: 'https://stockify.prathamprasoon.com',
    title: 'Stockify',
    description: "Learn how to trade and invest with stockify's real life simulator, with no risk.",
    images: [
      {
        url: '../../static/cover.png',
        width: 800,
        height: 600,
        alt: 'Stockify cover image'
      },
      {
        url: '../../static/cover.png',
        width: 900,
        height: 800,
        alt: 'Stockify cover image'
      },
      { url: '../../static/cover.png' },
      { url: '../../static/cover.png' }
    ],
    site_name: 'Stockify'
  }}
  twitter={{
    handle: '@Stockify_',
    cardType: 'summary_large_image',
    title: 'Using More of Config',
    description: "Learn how to trade and invest with stockify's real life simulator, with no risk.",
    image: '../../static/cover.png',
    imageAlt: 'Stockify cover image'
  }}
/>

<Nav />
<slot />
