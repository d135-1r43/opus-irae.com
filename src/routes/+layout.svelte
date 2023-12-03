<script lang="ts">
  import { browser } from "$app/environment";

  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";

  import "../app.css";

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
    <img alt="Blue Background with Clouds and Stars" decoding="sync"
         class="md:block object-cover transition-opacity bg-black opacity-80 -z-10"
         style="position: fixed; height: 100%; width: 100%; inset: 0px" sizes="100vw"
         src="background-kw.png">
    <slot />
  </div>
</QueryClientProvider>
