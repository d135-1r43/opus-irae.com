<script lang="ts">
  import {browser} from '$app/environment';
  import Nav from '$lib/components/nav.svelte';
  import {QueryClient, QueryClientProvider} from '@tanstack/svelte-query';
  import '../app.css';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser
      }
    }
  });
</script>

<QueryClientProvider client={queryClient}>
  <div class="sticky top-0 right-0 h-screen md:col-span-5 2xl:col-span-6">
    <img alt="Blue Background with Clouds and Stars" decoding="sync" data-nimg="fill"
         class="hidden md:block object-cover transition-opacity"
         style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" sizes="100vw"
         src="background-kw.png">
    <Nav/>
  </div>
</QueryClientProvider>

<style>
  :global(body) {
    overflow-x: hidden;
  }
</style>
