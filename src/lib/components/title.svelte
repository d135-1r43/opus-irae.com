<script lang="ts">
  import Back from "$lib/components/icons/back.svelte";
</script>

<template>
  <h1 class="oi-rise
        p-6 pb-1.5
        font-trajan tracking-wider
        text-3xl
        md:text-2xl
        md:pb-4
        md:relative md:-left-1">
    <a href="/" class="title-link group flex w-fit items-center space-x-1 text-white/80">
      <Back />
      <span class="title-link__text">Opus Iræ</span>
    </a>
  </h1>
</template>

<style>
  .title-link {
    transition: color 600ms var(--ease-sacred);
  }

  .title-link__text {
    display: inline-block;
    transition:
      transform 600ms var(--ease-sacred),
      text-shadow 600ms var(--ease-sacred);
  }

  .title-link:hover,
  .title-link:focus-visible {
    color: rgb(255 255 255);
  }

  .title-link:hover .title-link__text,
  .title-link:focus-visible .title-link__text {
    text-shadow: 0 0 16px rgb(147 197 253 / 0.35);
  }

</style>
