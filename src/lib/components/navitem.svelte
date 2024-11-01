<script lang="ts">
  interface Props {
    text?: string;
    href?: string;
  }

  let { text = 'DEFAULT', href = '/' }: Props = $props();
</script>

<template>
  <a class="block text-3xl leading-[55px]
    font-trajan font-light tracking-widest
    hover:opacity-60
    transition-opacity duration-300"
     href="{href}">
    {text}
  </a>
</template>
