<script lang="ts">
  export let text: string = 'DEFAULT';
  export let href: string = '/';
</script>

<template>
  <a class="block text-3xl leading-[55px]
    font-trajan font-ligh tracking-[.45em]
    hover:opacity-60
    transition-opacity duration-300"
     href="{href}">
    {text}
  </a>
</template>
