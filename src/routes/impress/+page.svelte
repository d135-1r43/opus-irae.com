<script lang="ts">
  import Title from "$lib/components/title.svelte";
  import Heptagram from "$lib/components/icons/heptagram.svelte";

  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Opus Iræ Impressum und Datenschutzerklärung</title>
</svelte:head>

<template>
  <aside class="
      w-full pt-4
      md:ml-10 md:p-2xl md:min-w-[880px] md:max-w-[1220px] text-white md:divide-white
      flex-col divide-y
      bg-black bg-transparent/30
      ">

    <Title />

    <div>
      <h1 class="p-10 text-2xl font-krete font-bold">Impressum</h1>
      <div class="px-10 font-krete font-normal text-md mt-0">
        {@html data.texts.data.impress}
      </div>
      <h1 class="p-10 text-2xl font-krete font-bold">Datenschutz&shy;erkl&auml;rung</h1>
      <div class="px-10 font-krete font-normal text-md mt-0">
        {@html data.texts.data.datenschutz}
      </div>
      <div class="flex justify-center py-2 mb-10">
        <Heptagram />
      </div>
    </div>
  </aside>
</template>

<style>
  :global(h2) {
    @apply text-xl mb-3 mt-5 font-bold;
  }

  :global(h3) {
    @apply text-lg mb-3 mt-5 font-bold;
  }

  :global(p) {
    @apply py-2;
  }
</style>
