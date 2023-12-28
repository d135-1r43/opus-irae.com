<script lang="ts">
  import { onNavigate } from "$app/navigation";

  import "../app.css";


  onNavigate((navigation) => {
    if (!(document as any).startViewTransition) return;
    return new Promise((resolve) => {
      (document as any).startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <meta name="theme-color" content="#182736" />
</svelte:head>

<template>
  <div class="sticky top-0 right-0 h-screen md:col-span-5 2xl:col-span-6">
    <img alt="Blue Background with Clouds and Stars" decoding="sync"
         class="md:block object-cover transition-opacity bg-black opacity-95 -z-10"
         style="position: fixed; height: 100%; width: 100%; inset: 0px" sizes="100vw"
         src="background-kw.webp">
    <slot />
  </div>
</template>

<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
    }

    @keyframes fade-out {
        to {
            opacity: 0;
        }
    }

    @keyframes slide-from-right {
        from {
            transform: translateX(30px);
        }
    }

    @keyframes slide-to-left {
        to {
            transform: translateX(-30px);
        }
    }
</style>
