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
      w-full pt-4 pb-[50px]
      md:ml-10 md:p-2xl md:min-w-[880px] md:max-w-[1220px] text-white md:divide-white
      flex-col divide-y
      bg-black/30
      ">

    <Title />

    <div>
      <h1 class="px-10 pt-10 pb-6 text-3xl font-krete font-bold tracking-wide">Impressum</h1>
      <div class="impress-content px-10 pb-12 font-krete font-normal text-md leading-relaxed">
        {@html data.texts.data.impress}
      </div>
      <h1 class="px-10 pt-12 pb-6 text-3xl font-krete font-bold tracking-wide">Datenschutz&shy;erkl&auml;rung</h1>
      <div class="impress-content px-10 pb-12 font-krete font-normal text-md leading-relaxed">
        {@html data.texts.data.datenschutz}
      </div>
      <div class="flex justify-center py-2 mb-10">
        <Heptagram />
      </div>
    </div>
  </aside>
</template>

<style>
  :global(.impress-content h2) {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.025em;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  :global(.impress-content h2:first-child) {
    margin-top: 0;
    border-top: none;
    padding-top: 0;
  }

  :global(.impress-content h3) {
    font-size: 1.35rem;
    font-weight: bold;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    letter-spacing: 0.025em;
  }

  :global(.impress-content h4) {
    font-size: 1.15rem;
    font-weight: 600;
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
  }

  :global(.impress-content p) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    line-height: 1.75;
    max-width: 80ch;
  }

  :global(.impress-content ul),
  :global(.impress-content ol) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1.5rem;
    line-height: 1.75;
  }

  :global(.impress-content li) {
    line-height: 1.75;
    margin-bottom: 0.5rem;
  }

  :global(.impress-content strong) {
    font-weight: bold;
  }

  :global(.impress-content a) {
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.4);
  }

  :global(.impress-content a:hover) {
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }
</style>
