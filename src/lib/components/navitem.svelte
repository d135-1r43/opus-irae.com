<script lang="ts">
  import Externallink from "$lib/components/icons/externallink.svelte";

  interface Props {
    text?: string;
    href?: string;
  }

  let { text = "DEFAULT", href = "/" }: Props = $props();
</script>

<template>
  <a class="block text-3xl leading-[55px]
    font-trajan font-light tracking-widest
    hover:opacity-60
    transition-opacity duration-300"
     href="{href}">
    {#if href.startsWith("http")}
      {text}<Externallink />
      {:else}
      {text}
    {/if}
  </a>
</template>
