<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import type { PageData } from './$types';

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

  function getAssetUrl(uuid: string): string {
    return 'https://directus.herhoffer.net/assets/' + uuid;
  }

  interface Props {
    data: PageData;
    children?: import('svelte').Snippet;
  }

  let { data, children }: Props = $props();
</script>

<svelte:head>
  <link rel="icon" href="{getAssetUrl(data.band.favicon)}" />
  <meta name="theme-color" content="#182736" />
</svelte:head>

<template>
  <div class="sticky top-0 right-0 h-screen md:col-span-5 2xl:col-span-6">
    <!-- The heavens: the painted sky drifts across two minutes, barely perceptibly. -->
    <img alt="Blue Background with Clouds and Stars" decoding="sync"
         class="md:block object-cover transition-opacity bg-black opacity-95 -z-10 oi-heavens"
         style="position: fixed; height: 100%; width: 100%; inset: 0px" sizes="100vw"
         src="/background-kw.webp">

    <!-- A veil of light passing over the sky. -->
    <div aria-hidden="true"
         class="pointer-events-none fixed inset-0 -z-10 oi-veil-light"
         style="background: radial-gradient(60% 45% at 50% 40%, rgba(147,197,253,0.10), transparent 70%);">
    </div>

    <!-- Vignette, to sink the edges into the dark. -->
    <div aria-hidden="true"
         class="pointer-events-none fixed inset-0 -z-10"
         style="background: radial-gradient(120% 90% at 50% 45%, transparent 45%, rgba(0,0,0,0.55) 100%);">
    </div>

    {@render children?.()}
  </div>
</template>
